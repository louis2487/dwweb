import Image from "next/image";
import type { CSSProperties } from "react";

const SERVICE_NAME = "분양프로";
const PAGE_TITLE = "상품 소개";
const CONTACT_TEL = "031-664-1119";
const CONTACT_EMAIL = "daewon469@naver.com";

// ✅ 너가 운영 정책에 맞게 수정
const PRODUCTS = [
  {
    name: "유료 1유형",
    price: "80,000원",
    desc: "상단 노출/강조",
    badge: "추천",
  },
  {
    name: "유료 2유형",
    price: "30,000원",
    desc: "중간 노출/강조",
    badge: "가성비",
  },
  {
    name: "무료 3유형",
    price: "무료",
    desc: "일반 등록",
    badge: "기본",
  },
];

export default function ProductPage() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.h1}>{PAGE_TITLE}</h1>
        <p style={styles.meta}>
          <span>{SERVICE_NAME} 구인등록 상품(등록 유형) 안내</span>
          <span style={styles.dot}>·</span>
          <span>문의: {CONTACT_TEL}</span>
          <span style={styles.dot}>·</span>
          <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.h2}>개요</h2>
        <p style={styles.p}>
          구인등록 시 “등록 유형”에 따라 노출/강조 방식이 달라질 수 있습니다.
          등록 유형은 유료/무료로 구분되며, 유료 유형은 결제를 통해 이용할 수 있습니다.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>등록 유형 및 가격</h2>

        <div style={styles.cards}>
          {PRODUCTS.map((p) => (
            <div key={p.name} style={styles.card}>
              <div style={styles.cardTop}>
                <div>
                  <div style={styles.cardTitleRow}>
                    <strong style={styles.cardTitle}>{p.name}</strong>
                    <span style={styles.badge}>{p.badge}</span>
                  </div>
                  <div style={styles.cardDesc}>{p.desc}</div>
                </div>
                <div style={styles.cardPrice}>{p.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.noticeBox}>
          <p style={styles.noticeP}>
            • 실제 결제 금액/결제수단/부가세 포함 여부 등은 결제 화면 및 결제 내역에서 확인할 수 있습니다.
          </p>
          <p style={styles.noticeP}>
            • 노출 위치/강조 방식은 서비스 운영 정책에 따라 변경될 수 있으며, 변경 시 서비스 내 공지로 안내합니다.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>화면 예시</h2>
        <div style={styles.imageWrap}>
          <Image
            src="/register-type.png"
            alt="구인등록 등록 유형 선택 화면 예시"
            width={900}
            height={1200}
            style={styles.image as any}
          />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>이용 방법</h2>
        <ol style={styles.ol}>
          <li style={styles.li}>구인등록 화면에서 “등록 유형”을 선택합니다.</li>
          <li style={styles.li}>결제 완료 후 해당 유형으로 등록이 완료됩니다.</li>
        </ol>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>환불/취소 안내</h2>
        <p style={styles.p}>
          환불/취소는 서비스의 <a href="/refund" style={styles.link}>환불/취소 정책</a>에 따릅니다.
          디지털 서비스 특성상 사용(제공)이 시작된 경우 환불이 제한될 수 있습니다.
        </p>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContact}>
          <span>문의: {CONTACT_TEL}</span>
          <span style={styles.dot}>·</span>
          <a href={`mailto:${CONTACT_EMAIL}`} style={styles.footerLink}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: 920,
    margin: "0 auto",
    padding: "32px 16px",
    lineHeight: 1.7,
    color: "#111",
    fontFamily:
      'system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", sans-serif',
  },
  header: { marginBottom: 20 },
  h1: { fontSize: 28, margin: 0, fontWeight: 800 },
  meta: {
    marginTop: 10,
    color: "#666",
    fontSize: 14,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  dot: { margin: "0 8px", opacity: 0.6 },
  link: { color: "#0b57d0", textDecoration: "none", fontWeight: 700 },

  section: { marginTop: 26 },
  h2: { fontSize: 18, margin: "0 0 12px 0", fontWeight: 800 },
  p: { margin: "0 0 10px 0" },

  cards: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 12,
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: 16,
    background: "#fff",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "flex-start",
  },
  cardTitleRow: { display: "flex", alignItems: "center", gap: 8 },
  cardTitle: { fontSize: 18 },
  badge: {
    fontSize: 12,
    padding: "2px 8px",
    borderRadius: 999,
    background: "#eef2ff",
    color: "#3730a3",
    fontWeight: 800,
  },
  cardDesc: { marginTop: 6, color: "#666", fontSize: 14 },
  cardPrice: { fontSize: 18, fontWeight: 900 },

  noticeBox: {
    marginTop: 12,
    border: "1px solid #f1f5f9",
    background: "#fafafa",
    borderRadius: 14,
    padding: 14,
  },
  noticeP: { margin: "6px 0", color: "#555", fontSize: 13.5 },

  imageWrap: {
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid #e5e7eb",
    background: "#fff",
  },
  image: { width: "100%", height: "auto", display: "block" },

  ol: { margin: 0, paddingLeft: 18 },
  li: { marginBottom: 8 },

  footer: {
    marginTop: 34,
    paddingTop: 18,
    borderTop: "1px solid #e5e7eb",
    color: "#666",
    fontSize: 13.5,
  },
  footerLinks: { display: "flex", flexWrap: "wrap", alignItems: "center" },
  footerLink: { color: "#0b57d0", textDecoration: "none", fontWeight: 800 },
  footerContact: { marginTop: 10, display: "flex", flexWrap: "wrap", alignItems: "center" },
};
