export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#111",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 상단 헤더 */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "16px 20px",
          borderBottom: "1px solid #e5e5e5",
          backgroundColor: "#0F2A44",
        }}
      >
        <img
          src="/logo.png"
          alt="DW Partners"
          style={{ width: 60, height: "auto" }}
        />
        <strong style={{ fontSize: 18, color: "white" }}>
          주식회사 대원파트너스
        </strong>
      </header>

      {/* 메인 컨텐츠 */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "32px 16px",
          width: "100%",
        }}
      >
        {/* 서비스 화면 이미지 3개 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            justifyItems: "center",
            marginTop: 24,
          }}
        >
          {["/home1.jpg", "/home2.jpg", "/home3.jpg"].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`분양프로 서비스 화면 ${idx + 1}`}
              style={{
                width: "100%",
                maxWidth: 260,
                borderRadius: 12,
                boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
              }}
            />
          ))}
        </div>

        {/* 설명 */}
        <div
          style={{
            marginTop: 32,
            textAlign: "center",
            lineHeight: 1.7,
            fontSize: 15,
          }}
        >
          <p>
            <strong>분양프로</strong>는 분양상담사 구인구직 모바일 플랫폼 서비스 앱 입니다.
          </p>
          <p style={{ marginTop: 12 }}>
            본 서비스는 구인/뉴스/수다/광고 등
            분양 관련 정보 제공을 목적으로 운영됩니다.
          </p>
          <p style={{ marginTop: 12 }}>
            본 페이지는 결제대행(PG) 심사 및
            통신사업자 신고를 위한
            공식 서비스 소개 페이지입니다.
          </p>

          <div style={{ marginTop: 14, fontSize: 13.5 }}>
            <a href="/privacy" style={linkStyle}>개인정보처리방침</a>
            <span style={{ margin: "0 12px", opacity: 0.55 }}>·</span>
            <a href="/service" style={linkStyle}>서비스 이용약관</a>
            <span style={{ margin: "0 12px", opacity: 0.55 }}>·</span>
            <a href="/refund" style={linkStyle}>환불 / 취소 정책</a>
          </div>

        </div>
      </section>

      {/* 푸터 */}
      <footer
        style={{
          marginTop: "auto",
          padding: "20px 16px",
          textAlign: "center",
          fontSize: 12,
          color: "#666",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            marginBottom: 12,
            display: "flex",
            flexWrap: "wrap",
            gap: "16px 24px",
            fontSize: "13.7px",
            opacity: 0.92,
            justifyContent: "center",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
            <strong>상호</strong>: (주)대원파트너스
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
            <strong>사업자등록번호</strong>: 219-87-04066
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
            <strong>대표자명</strong>: 김대원
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
            <strong>사업장 주소</strong>: 경기도 평택시 고덕면 도시지원1길 116, 113호
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
            <strong>유선전화</strong>: 031-664-1119
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
            <strong>문의 이메일</strong>: daewon469@naver.com
          </span>
        </div>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} DW PARTNERS. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
const linkStyle = {
  color: "#0b57d0",
  textDecoration: "none",
  fontWeight: 700,
};