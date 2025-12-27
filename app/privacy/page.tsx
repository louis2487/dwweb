// PrivacyPolicyPage.tsx
import React from "react";

type PrivacyPolicyConfig = {
  companyName: string; // 예: 스마트게이지 / (주)스마트게이지
  serviceName: string; // 예: 분양프로
  effectiveDate: string; // 예: 2025.12.27
  contactEmail: string; // 예: support@yourdomain.com
  contactPhone?: string; // 선택
  privacyOfficerName?: string; // 선택
  privacyOfficerTitle?: string; // 선택
  privacyOfficerEmail?: string; // 선택 (보통 contactEmail과 동일)
  websiteUrl?: string; // 예: https://daewon469.com
  appPolicyLastUpdated?: string; // 예: 2025.12.27
  appPolicyNoticeDate?: string; // 예: 2025.12.27
};

const CONFIG: PrivacyPolicyConfig = {
  companyName: "주식회사 대원파트너스",
  serviceName: "분양프로",
  effectiveDate: "2025.12.27",
  contactEmail: "daewon469@naver.com",
  contactPhone: "+8299165233",
  privacyOfficerName: "김대원",
  privacyOfficerTitle: "대표",
  privacyOfficerEmail: "daewon469@naver.com",
  websiteUrl: "https://www.daewon469.com/privacy",
  appPolicyNoticeDate: "2025.12.27",
  appPolicyLastUpdated: "2025.12.27",
};

function LabelValue({
  label,
  value,
}: {
  label: React.ReactNode;
  value?: React.ReactNode;
}) {
  if (!value) return null;
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <div style={{ fontWeight: 700, minWidth: 120 }}>{label}</div>
      <div style={{ opacity: 0.9 }}>{value}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const c = CONFIG;

  return (
    <div style={styles.page}>
      <main style={styles.container}>
        <article style={styles.card}>
          <header style={{ marginBottom: 18 }}>
            <h1 style={styles.h1}>{c.serviceName} 개인정보처리방침</h1>
            <p style={styles.pMuted}>
              {c.companyName}(이하 “회사”)는 「개인정보 보호법」 등 관련 법령을 준수하며,
              이용자의 개인정보를 보호하고 권익을 보호하기 위해 다음과 같이
              개인정보처리방침을 수립·공개합니다.
            </p>

            <div style={styles.metaBox}>
              <LabelValue label="시행일" value={c.effectiveDate} />
              <LabelValue label="서비스명" value={c.serviceName} />
              <LabelValue
                label="문의"
                value={
                  <>
                    <a href={`mailto:${c.contactEmail}`} style={styles.link}>
                      {c.contactEmail}
                    </a>
                    {c.contactPhone ? (
                      <>
                        <span style={{ margin: "0 6px" }}>/</span>
                        <span>{c.contactPhone}</span>
                      </>
                    ) : null}
                  </>
                }
              />
              <LabelValue
                label="개인정보 보호책임자"
                value={
                  <>
                    <span>
                      {c.privacyOfficerName}
                      {c.privacyOfficerTitle ? ` (${c.privacyOfficerTitle})` : ""}
                    </span>
                    {c.privacyOfficerEmail ? (
                      <>
                        <span style={{ margin: "0 6px" }}>/</span>
                        <a href={`mailto:${c.privacyOfficerEmail}`} style={styles.link}>
                          {c.privacyOfficerEmail}
                        </a>
                      </>
                    ) : null}
                  </>
                }
              />
            </div>
          </header>

          <section style={styles.section}>
            <h2 style={styles.h2}>1. 개인정보의 처리 목적</h2>
            <p style={styles.p}>
              회사는 다음 목적을 위해 개인정보를 처리합니다. 처리한 개인정보는 아래 목적
              이외의 용도로 사용되지 않으며, 목적이 변경될 경우 관련 법령에 따라 별도 동의를
              받는 등 필요한 조치를 이행합니다.
            </p>
            <ul style={styles.ul}>
              <li>회원가입 및 본인 식별/인증, 계정 관리</li>
              <li>서비스 제공(게시글/댓글/좋아요/알림 등 커뮤니티 기능 제공)</li>
              <li>문의/민원 처리 및 공지사항 전달</li>
              <li>서비스 품질 개선, 오류 분석, 부정 이용 방지</li>
              <li>(선택) 마케팅/프로모션 안내 및 맞춤형 서비스 제공</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>2. 처리하는 개인정보의 항목</h2>
            <p style={styles.p}>
              회사는 서비스 제공을 위해 최소한의 개인정보를 수집·이용합니다.
            </p>

            <h3 style={styles.h3}>(1) 회원가입/로그인 시</h3>
            <ul style={styles.ul}>
              <li>
                <b>필수</b>: 닉네임, 비밀번호, 이름, 전화번호, 관심지역
              </li>
            </ul>

            <h3 style={styles.h3}>(2) 서비스 이용 과정에서 자동 생성/수집될 수 있는 항목</h3>
            <ul style={styles.ul}>
              <li>기기정보(OS, 앱 버전), 접속 로그, IP, 쿠키/식별자, 이용기록, 오류 로그</li>
              <li>푸시 알림 토큰(기기 알림 발송을 위해 필요)</li>
            </ul>


            <h3 style={styles.h3}>(3) 고객 문의 시</h3>
            <ul style={styles.ul}>
              <li>문의 내용, 연락처, 첨부파일(사용자가 업로드한 자료)</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>3. 개인정보의 처리 및 보유 기간</h2>
            <p style={styles.p}>
              회사는 원칙적으로 개인정보 처리 목적이 달성되면 지체 없이 파기합니다.
              다만, 관계 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.
            </p>
            <ul style={styles.ul}>
              <li>회원정보: 회원 탈퇴 시까지</li>
              <li>서비스 이용기록(로그): 내부 운영정책에 따름</li>
              <li>고객문의 기록: 처리 완료 후</li>
              <li>
                법령에 따른 보관(해당 시)
                <ul style={styles.ulNested}>
                  <li>계약/청약철회/대금결제 및 재화 공급에 관한 기록: 5년(전자상거래법)</li>
                  <li>소비자 불만/분쟁처리 기록: 3년(전자상거래법)</li>
                  <li>표시/광고 기록: 6개월(전자상거래법)</li>
                </ul>
              </li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>4. 개인정보의 제3자 제공</h2>
            <p style={styles.p}>
              회사는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 다만 다음의 경우 예외로 합니다.
            </p>
            <ul style={styles.ul}>
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령에 근거가 있거나 수사기관의 적법한 절차에 따른 요청이 있는 경우</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>5. 개인정보 처리의 위탁</h2>
            <p style={styles.p}>
              회사는 서비스 제공을 위해 개인정보 처리 업무를 위탁할 수 있으며,
              위탁 시 관련 법령에 따라 계약 및 관리·감독을 수행합니다.
            </p>
            <ul style={styles.ul}>
              <li>위탁받는 자(수탁자): [예: 클라우드/호스팅 사업자명, 푸시 발송 서비스, 고객센터 툴 등]</li>
              <li>위탁업무 내용: [예: 서버 호스팅 및 데이터 저장, 푸시 알림 발송, 오류 분석]</li>
              <li>보유 및 이용기간: 위탁계약 종료 또는 위탁 목적 달성 시까지</li>
            </ul>
            <p style={styles.pMuted}>※ 위탁사항이 변경되는 경우 본 방침을 통해 공개합니다.</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>6. 이용자 및 법정대리인의 권리·의무 및 행사 방법</h2>
            <p style={styles.p}>이용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
            <ul style={styles.ul}>
              <li>개인정보 열람 요구</li>
              <li>정정·삭제 요구</li>
              <li>처리정지 요구</li>
              <li>동의 철회 및 회원 탈퇴</li>
            </ul>
            <p style={styles.p}>
              권리 행사는 앱 내 설정/탈퇴 기능 또는 아래 연락처를 통해 요청할 수 있으며,
              회사는 관련 법령에 따라 지체 없이 조치합니다.
            </p>
            <ul style={styles.ul}>
              <li>
                문의처:{" "}
                <a href={`mailto:${c.contactEmail}`} style={styles.link}>
                  {c.contactEmail}
                </a>
              </li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>7. 개인정보의 파기 절차 및 방법</h2>
            <p style={styles.p}>
              회사는 개인정보 보유기간 경과 또는 처리 목적 달성 시 지체 없이 파기합니다.
            </p>
            <ul style={styles.ul}>
              <li>파기절차: 목적 달성 후 별도 DB로 옮겨(또는 별도 보관) 법령에 따른 기간 저장 후 파기</li>
              <li>
                파기방법:
                <ul style={styles.ulNested}>
                  <li>전자적 파일: 복구 불가능한 방식으로 영구 삭제</li>
                  <li>종이 문서: 분쇄 또는 소각</li>
                </ul>
              </li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>8. 개인정보의 안전성 확보 조치</h2>
            <ul style={styles.ul}>
              <li>관리적 조치: 내부 관리계획 수립, 정기 교육, 접근권한 최소화</li>
              <li>기술적 조치: 암호화(비밀번호 등), 접근통제, 로그관리, 보안프로그램 적용</li>
              <li>물리적 조치: 전산실/자료보관실 접근통제</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>9. 개인정보 자동 수집 장치의 설치·운영 및 거부</h2>
            <p style={styles.p}>
              회사는 서비스 제공 및 품질 개선을 위해 쿠키/식별자 등 자동 수집 장치를 사용하지 않습니다.</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>10. 앱 권한(접근권한) 안내</h2>
            <p style={styles.p}>
              {c.serviceName}는 원활한 서비스 제공을 위해 아래 권한을 요청할 수 있습니다.
            </p>
            <ul style={styles.ul}>
              <li>(선택) 알림: 푸시 알림 수신</li>
              <li>(선택) 사진/저장공간: 프로필/게시물 이미지 업로드</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>11. 개인정보 보호책임자 및 담당부서</h2>
            <ul style={styles.ul}>
              <li>개인정보 보호책임자: {c.privacyOfficerName || "[성명/직책]"} </li>
              <li>
                문의:{" "}
                <a href={`mailto:${c.contactEmail}`} style={styles.link}>
                  {c.contactEmail}
                </a>
                {c.contactPhone ? (
                  <>
                    <span style={{ margin: "0 6px" }}>/</span>
                    <span>{c.contactPhone}</span>
                  </>
                ) : null}
              </li>
            </ul>

            <p style={styles.p}>
              또한 이용자는 개인정보 침해에 대한 신고나 상담이 필요한 경우 아래 기관에 문의할 수 있습니다.
            </p>
            <ul style={styles.ul}>
              <li>개인정보침해신고센터(한국인터넷진흥원)</li>
              <li>대검찰청 사이버수사과</li>
              <li>경찰청 사이버수사국</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>12. 개인정보처리방침의 변경</h2>
            <p style={styles.p}>
              회사는 법령/서비스 변경사항을 반영하기 위해 본 방침을 변경할 수 있으며,
              변경 시 앱 공지 또는 웹페이지를 통해 고지합니다.
            </p>
            <div style={styles.metaBox}>
              <LabelValue label="공고일자" value={c.appPolicyNoticeDate || "[YYYY.MM.DD]"} />
              <LabelValue label="시행일자" value={c.appPolicyLastUpdated || "[YYYY.MM.DD]"} />
              {c.websiteUrl ? (
                <LabelValue
                  label="URL"
                  value={
                    <a href={c.websiteUrl} style={styles.link} target="_blank" rel="noreferrer">
                      {c.websiteUrl}
                    </a>
                  }
                />
              ) : null}
            </div>
          </section>

          <footer style={{ marginTop: 28, paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            <p style={styles.pMuted}>
              © {new Date().getFullYear()} {c.companyName}. All rights reserved.
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f6f7f9",
    padding: "28px 16px",
  },
  container: {
    maxWidth: 920,
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    borderRadius: 14,
    padding: "26px 22px",
    boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
    lineHeight: 1.65,
    color: "#111",
  },
  h1: {
    fontSize: 28,
    margin: 0,
    marginBottom: 10,
    letterSpacing: -0.2,
  },
  h2: {
    fontSize: 18,
    margin: "20px 0 8px",
  },
  h3: {
    fontSize: 15,
    margin: "14px 0 6px",
  },
  section: {
    marginTop: 18,
  },
  p: {
    margin: "8px 0",
    fontSize: 14.5,
  },
  pMuted: {
    margin: "8px 0",
    fontSize: 13.5,
    opacity: 0.75,
  },
  ul: {
    margin: "8px 0 8px 18px",
    padding: 0,
    fontSize: 14.5,
  },
  ulNested: {
    margin: "6px 0 6px 18px",
    padding: 0,
    fontSize: 14.5,
  },
  link: {
    color: "#0b57d0",
    textDecoration: "none",
    fontWeight: 600,
  },
  metaBox: {
    marginTop: 12,
    background: "rgba(0,0,0,0.03)",
    borderRadius: 12,
    padding: "12px 14px",
    display: "grid",
    gap: 6,
  },
  notice: {
    marginTop: 12,
    background: "rgba(255, 193, 7, 0.15)",
    border: "1px solid rgba(255, 193, 7, 0.35)",
    borderRadius: 12,
    padding: "10px 12px",
    fontSize: 13.5,
  },
};