"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, ExternalLink } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const properties = [
  {
    name: "RD's Hotel",
    type: "3-Star Hotel & Restaurant",
    lines: [
      "Shop No. 301–310 & 401–408, 4th Floor,",
      "Sai Sharnam Sai Platinum,",
      "Near Dastan Circle, Ahmedabad,",
      "Gujarat 382330",
    ],
    mapQuery: "Sai+Sharnam+Sai+Platinum+Dastan+Circle+Ahmedabad+Gujarat+382330",
    whatsappMsg: "Hello! I'd like to inquire about RD's Hotel.",
  },
  {
    name: "RDS Farm",
    type: "Resort & Party Plot",
    lines: [
      "Dastan Circle,",
      "Near Laxmi Sky City,",
      "Ahmedabad, Gujarat 382330",
    ],
    mapQuery: "Dastan+Circle+near+Laxmi+Sky+City+Ahmedabad+Gujarat+382330",
    whatsappMsg: "Hello! I'd like to inquire about RDS Farm.",
  },
  {
    name: "RDS Farm 2",
    type: "Resort & Party Plot",
    lines: ["Address coming soon"],
    mapQuery: null,
    whatsappMsg: "Hello! I'd like to inquire about RDS Farm 2.",
  },
];

/** Contact page with property addresses and WhatsApp CTA. */
export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#F5EFE4",
          padding: "7rem 1.5rem 5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <motion.p
            {...fadeUp}
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8976A",
              marginBottom: "1.25rem",
            }}
          >
            Reach Out
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#1C1A17",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Contact Us
          </motion.h1>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "48px",
              height: "1px",
              backgroundColor: "#B8976A",
              margin: "0 auto 1.5rem",
            }}
          />

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "#7A6F62",
            }}
          >
            We&apos;d love to hear from you. Visit us at any of our three
            properties or send us a message — our team will get back to you
            promptly.
          </motion.p>
        </div>
      </section>

      {/* ── Property Cards ───────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#EDE5D8", padding: "6rem 1.5rem" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.p
            {...fadeUp}
            style={{
              fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8976A",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Our Locations
          </motion.p>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#1C1A17",
              textAlign: "center",
              marginBottom: "3.5rem",
            }}
          >
            Find Us
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {properties.map((prop, i) => (
              <motion.div
                key={prop.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundColor: "#FAF7F2",
                  padding: "2rem",
                  borderRadius: "2px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {/* Property name */}
                <div>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#B8976A",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {prop.type}
                  </p>
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.375rem",
                      color: "#1C1A17",
                    }}
                  >
                    {prop.name}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    backgroundColor: "#B8976A",
                  }}
                />

                {/* Address */}
                <div
                  style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                >
                  <MapPin
                    size={16}
                    style={{ color: "#B8976A", marginTop: "3px", flexShrink: 0 }}
                  />
                  <div
                    style={{
                      fontFamily:
                        "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      color: "#7A6F62",
                    }}
                  >
                    {prop.lines.map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < prop.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                    marginTop: "auto",
                  }}
                >
                  {prop.mapQuery ? (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${prop.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.625rem 1.25rem",
                        backgroundColor: "#2D5F4F",
                        color: "#F5EFE4",
                        fontFamily:
                          "var(--font-inter), Inter, system-ui, sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        borderRadius: "2px",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#243f35")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#2D5F4F")
                      }
                    >
                      <ExternalLink size={13} />
                      Get Directions
                    </a>
                  ) : (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.625rem 1.25rem",
                        backgroundColor: "#D9CDBF",
                        color: "#7A6F62",
                        fontFamily:
                          "var(--font-inter), Inter, system-ui, sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        borderRadius: "2px",
                        cursor: "not-allowed",
                      }}
                    >
                      Coming Soon
                    </span>
                  )}

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prop.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.625rem 1.25rem",
                      backgroundColor: "transparent",
                      border: "1px solid #D9CDBF",
                      color: "#2D5F4F",
                      fontFamily:
                        "var(--font-inter), Inter, system-ui, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      borderRadius: "2px",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "#B8976A")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "#D9CDBF")
                    }
                  >
                    <MessageCircle size={13} />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

