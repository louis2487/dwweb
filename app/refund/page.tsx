import React from "react";

const COMPANY_NAME = "(주)대원파트너스"; // TODO: 수정
const SERVICE_NAME = "분양프로"; // TODO
const EFFECTIVE_DATE = "2026-01-12"; // TODO
const CONTACT_EMAIL = "daewon469@naver.com"; // TODO

export default function RefundPolicy() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.h1}>환불 / 취소 정책</h1>
        <p style={styles.meta}>
          시행일: {EFFECTIVE_DATE} · 문의:{"031-664-1119"}
          <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </header>

      <section style={styles.section}>
        <p style={styles.p}>
          {COMPANY_NAME}(이하 “회사”)는 {SERVICE_NAME}(이하 “서비스”)에서 판매되는 유료 상품
          (예: 캐시, 유료 서비스/콘텐츠 등)에 대해 관계 법령 및 본 정책에 따라 취소/환불을 처리합니다.
        </p>
        <p style={styles.p}>
          환불은 원칙적으로 <b>결제수단(카드/계좌이체 등)으로의 취소 또는 환급</b> 방식으로 진행되며,
          결제수단 및 PG사 정책에 따라 처리 기간이 달라질 수 있습니다.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>① 결제 취소(청약철회) 및 환불 가능 범위</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            결제 후 <b>사용(소진)하지 않은</b> 캐시/유료 이용권/유료 기능에 한하여 환불이 가능합니다.
          </li>
          <li style={styles.li}>
            디지털 서비스 제공이 이미 시작되었거나, 캐시를 사용해 서비스 내 기능/콘텐츠를 이용한 경우
            해당 사용분(또는 제공된 디지털 서비스)에 대해서는 환불이 제한될 수 있습니다.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>② 환불 불가 / 제한 사유</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            이미 사용(소진)한 캐시 또는 캐시로 제공/이행된 디지털 서비스(예: 등록, 강조, 노출 등)는
            현금 환급 또는 교환이 불가합니다.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>③ 환불 신청 방법 및 처리</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            환불 신청은 앱/웹 내 고객센터 또는 문의 채널을 통해 접수할 수 있습니다.
          </li>
          <li style={styles.li}>
            원활한 처리를 위해 <b>회원 정보(이메일/휴대폰), 결제일시, 결제수단, 주문번호(영수증),
            환불 사유</b>를 함께 제출해 주세요.
          </li>
          <li style={styles.li}>
            접수 후 내부 확인을 거쳐 처리되며, 카드 결제 취소는 카드사/PG사 사정에 따라 승인 취소 반영까지
            추가 시간이 소요될 수 있습니다.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>④ 정책 변경</h2>
        <p style={styles.p}>
          회사는 서비스 운영상 필요 또는 관련 법령/PG 정책 변경에 따라 본 환불/취소 정책을 변경할 수 있으며,
          변경 시 서비스 내 공지를 통해 안내합니다.
        </p>
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
  section: { marginTop: 24 },
  h2: { fontSize: 18, margin: "0 0 10px 0", fontWeight: 700 },
  p: { margin: "0 0 10px 0", color: "#111" },
  ul: { margin: 0, paddingLeft: 18 },
  li: { marginBottom: 8 },
  link: { color: "inherit" },
};
