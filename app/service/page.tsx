import React from "react";
import type { CSSProperties } from "react";
const COMPANY_NAME = "(주)대원파트너스";
const SERVICE_NAME = "분양프로";
const EFFECTIVE_DATE = "2026-01-12";
const CONTACT_EMAIL = "daewon469@naver.com";

export default function TermsOfService() {
    return (
        <main style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.h1}>서비스 이용 약관</h1>
                <p style={styles.meta}>
                    시행일: {EFFECTIVE_DATE} · 문의:{"031-664-1119"} ·
                    <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>
                        { CONTACT_EMAIL}
                    </a>
                </p>
            </header>

            <section style={styles.section}>
                <h2 style={styles.h2}>안내</h2>
                <p style={styles.p}>
                    {COMPANY_NAME}(이하 “회사”)는 {SERVICE_NAME}(이하 “서비스”) 이용과 관련하여
                    이용자와 회사 간의 권리·의무 및 책임사항, 서비스 이용조건과 절차를 규정하기
                    위해 본 약관을 제정합니다.
                </p>
                <p style={styles.p}>
                    이용자는 회원가입 또는 결제 진행, 서비스 이용을 통해 본 약관에 동의한 것으로
                    간주되며, 약관에 동의하지 않는 경우 서비스 이용이 제한될 수 있습니다.
                </p>
                <p style={styles.p}>
                    회사는 관계 법령을 위배하지 않는 범위 내에서 약관을 변경할 수 있으며, 약관 변경 시
                    서비스 내 공지(또는 별도 안내)를 통해 시행일과 변경 내용을 고지합니다.
                    변경된 약관에 동의하지 않는 경우 이용자는 서비스 이용을 중단하고 회원탈퇴를 요청할 수 있습니다.
                </p>
            </section>

            <section style={styles.section}>
                <h2 style={styles.h2}>약관 전문</h2>

                <div style={styles.box}>
                    {/* ✅ 줄/빈줄 보존: pre-wrap */}
                    <pre style={styles.pre}>
                        {`서비스 이용 약관

제 1 조 (목적)
이 약관은 '분양프로'(이하 “회사”)가 제공하는 모든 서비스(이하 “서비스”)의 이용 조건 및 절차, 이용자와 회사의 권리·의무와 책임사항 등을 규정함을 목적으로 합니다.

제 2 조 (정의)
1. “이용자”란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.
2. “회원”이란 회사와 이용계약을 체결하고 서비스를 지속적으로 이용할 수 있는 자를 말합니다.
3. “비회원”이란 회원으로 가입하지 않고 서비스를 이용하는 자를 말합니다.

제 3 조 (약관의 효력 및 변경)
1. 본 약관은 서비스 화면 또는 기타 방법으로 공지함으로써 효력을 발생합니다.
2. 회사는 필요 시 관계 법령을 위배하지 않는 범위에서 약관을 개정할 수 있으며, 변경 시 공지 후 시행합니다.
3. 이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 회원탈퇴를 요청할 수 있습니다.

제 4 조 (서비스의 제공 및 변경)
1. 회사는 다음 서비스를 제공합니다.
(1) 분양 정보 등록 및 열람 서비스
(2) 구인·구직 정보 제공 서비스
(3) 커뮤니티 게시판 및 채팅 서비스
(4) 기타 회사가 정하는 서비스
2. 회사는 서비스 개선을 위해 내용이나 기술적 사양을 변경할 수 있으며, 사전에 공지합니다.

제 5 조 (서비스의 중단)
회사는 다음 각 호에 해당하는 경우 서비스 제공을 일시 중단할 수 있습니다.
1. 시스템 점검·보수 등 불가피한 경우
2. 천재지변, 정전, 통신 두절 등 불가항력 사유 발생 시
3. 기타 회사가 필요하다고 판단한 경우

제 6 조 (회원의 의무)
1. 회원은 본 약관 및 관계 법령을 준수해야 하며, 다음 행위를 금합니다.
(1) 타인의 정보를 도용하거나 허위 정보 입력
(2) 서비스 운영을 방해하거나 고의로 시스템 장애 유발
(3) 타인의 명예를 훼손하거나 불법 정보 게시
(4) 저작권 등 제3자의 권리를 침해하는 행위
(5) 기타 법령에 위반되는 행위
2. 회원이 위 조항을 위반할 경우 회사는 서비스 이용 제한 및 계약 해지를 할 수 있습니다.

제 7 조 (회사의 의무)
1. 회사는 관련 법령과 본 약관이 금지하지 않는 범위 내에서 서비스를 안정적으로 제공합니다.
2. 회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다.

제 8 조 (게시물의 저작권)
서비스 내 게시물의 저작권은 게시자에게 있으며, 회사는 서비스 운영·홍보를 위한 범위 내에서 이를 이용할 수 있습니다.

제 9 조 (이용계약의 해지)
1. 이용자는 언제든지 회원탈퇴를 요청할 수 있으며, 회사는 관련 법령에 따라 신속히 처리합니다.
2. 회사는 이용자가 약관 또는 법령을 위반한 경우 사전 통보 후 이용계약을 해지할 수 있습니다.

제 10 조 (면책)
1. 회사는 천재지변, 불가항력 또는 이용자의 귀책사유로 인한 서비스 장애에 대해 책임을 지지 않습니다.
2. 회사는 이용자 상호 간의 거래나 분쟁에 관여하지 않으며, 이에 대한 책임을 지지 않습니다.

제 11 조 (분쟁해결)
본 약관과 관련된 분쟁은 관계 법령 및 상관례에 따라 해결하며, 소송이 제기될 경우 회사의 본사 소재지를 관할 법원으로 합니다.

제 12 조 (캐시의 환급 및 현금 교환 제한)
1. 이용자가 결제 등을 통하여 구매한 캐시는 서비스 내에서 정해진 용도에 한하여 사용할 수 있으며,
디지털 서비스를 위해 사용된 캐시는 어떠한 경우에도 현금으로 환급하거나 교환할 수 없습니다.
2. 캐시의 사용, 소멸, 유효기간 등 기타 사항은 서비스 정책에 따르며, 회사는 관련 내용을 사전 공지 후 변경할 수 있습니다.
3. 결제 후 사용한 적 없는 캐시 보유분에 한하여 현금으로 환불이 가능합니다.

제 13 조 (이벤트 포인트 지급)
1. 이벤트로 진행 과정에서 지급된 포인트는 이벤트 종료 시에도 유효하며 회사 정책 변경 시 추가적인 지급은 되지 않을 수 있습니다.`}
                    </pre>
                </div>
            </section>

        </main>
    );
}

const styles = {
    container: {
        maxWidth: 900,
        margin: "0 auto",
        padding: "32px 16px",
        lineHeight: 1.7,
        fontFamily:
            'system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", sans-serif',
    },
    header: { marginBottom: 24 },
    h1: { fontSize: 28, margin: 0, fontWeight: 800 },
    meta: { marginTop: 8, color: "#666", fontSize: 14 },
    section: { marginTop: 28 },
    h2: { fontSize: 18, margin: "0 0 12px 0", fontWeight: 700 },
    p: { margin: "0 0 10px 0", color: "#111" },
    box: {
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        background: "#fafafa",
    },
    link: { color: "inherit" },
    pre: {
        margin: 0,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowWrap: "anywhere",
        fontSize: 14.5,
        lineHeight: 1.75,
        color: "#111",
        fontFamily:
            'system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", sans-serif',
    },
} satisfies Record<string, CSSProperties>;