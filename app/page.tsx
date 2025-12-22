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
        </div>

        {/* 사업자 정보 */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: "1px solid #e5e5e5",
            fontSize: 14,
            lineHeight: 1.7,
          }}
        >
          <p><strong>운영주체</strong> : (주)대원파트너스</p>
          <p><strong>서비스명</strong> : 분양프로</p>
          <p><strong>사업 유형</strong> : 온라인 정보 제공 서비스</p>
          <p><strong>문의 이메일</strong> : daewon469@naver.com</p>
        </div>
      </section>

      {/* 푸터 */}
      <footer
        style={{
          marginTop: "auto",
          padding: "20px 0",
          textAlign: "center",
          fontSize: 12,
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} DW PARTNERS. All rights reserved.
      </footer>
    </main>
  );
}