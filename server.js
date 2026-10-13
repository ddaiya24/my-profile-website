// 로컬 개발용 정적 파일 서버 (Node.js 내장 모듈만 사용)
// 실행: npm start  →  http://localhost:3000
// 배포 시에는 Vercel이 public/ 폴더를 정적 사이트로 그대로 서비스하므로 이 파일은 사용되지 않습니다.

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || 'localhost';
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf',
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type });
  res.end(body);
}

function resolveFile(urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }

  // public/ 밖의 파일에 접근하지 못하도록 경로를 정규화해서 검사
  const filePath = path.normalize(path.join(PUBLIC_DIR, decoded));
  if (filePath !== PUBLIC_DIR && !filePath.startsWith(PUBLIC_DIR + path.sep)) return null;

  // 디렉터리 요청은 index.html로 연결 (Vercel 정적 호스팅과 동일한 동작)
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    return path.join(filePath, 'index.html');
  }
  return filePath;
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, 'Method Not Allowed');
  }

  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  const filePath = resolveFile(pathname);
  if (!filePath) return send(res, 400, 'Bad Request');

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      return send(res, 404, '404 Not Found');
    }

    const type = MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': type,
      'Content-Length': stat.size,
      'Cache-Control': 'no-cache',
    });

    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(filePath).pipe(res);
  });

  res.on('finish', () => {
    console.log(`${req.method} ${pathname} → ${res.statusCode}`);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`\n  프로필 웹사이트가 실행 중입니다: http://${HOST}:${PORT}\n  종료하려면 Ctrl + C 를 누르세요.\n`);
});
