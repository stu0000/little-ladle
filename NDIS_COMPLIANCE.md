# NourishU NDIS Compliance Documentation

**Deployment Date:** May 31, 2026  
**Compliance Level:** NDIS-Ready  
**Data Residency:** Sydney, Australia (ap-southeast-2)  
**Certification Status:** Ready for Trial Phase

---

## Compliance Overview

NourishU is configured to meet NDIS requirements for participant data protection, privacy, and security. This document outlines the compliance measures implemented.

### NDIS Compliance Framework

| Requirement | Status | Implementation |
|-------------|--------|-----------------|
| **Data Residency (Australia)** | ✅ | Supabase Sydney region (ap-southeast-2) |
| **Encryption in Transit (TLS)** | ✅ | TLS 1.3 enforced via HSTS headers |
| **Encryption at Rest** | ✅ | AES-256-GCM database encryption |
| **Privacy Act 1988 (APPs)** | ✅ | Privacy policy & data handling procedures |
| **Secure Authentication** | ✅ | Supabase Auth with OAuth2 support |
| **Audit Logging** | ✅ | Database audit trails & activity logs |
| **Access Controls** | ✅ | Role-based access control (RBAC) |
| **Incident Response** | ✅ | Documented incident response procedures |

---

## Data Residency

### Geographic Location
- **Primary Region:** Sydney, Australia (ap-southeast-2)
- **Backup Region:** Sydney, Australia (redundancy)
- **Data Center Operator:** Supabase (AWS infrastructure)

### Compliance Certification
- ✅ All participant data stored in Australia
- ✅ No data transfer outside Australia
- ✅ Compliant with Privacy Act 1988
- ✅ Meets NDIS data residency requirements

---

## Security & Encryption

### Transport Security (TLS/HTTPS)

**Configuration:**
```
TLS Version: 1.3 (minimum)
Cipher Suites: TLS_AES_256_GCM_SHA384 (primary)
Certificate: Let's Encrypt (auto-renewed)
HSTS: max-age=31536000; includeSubDomains; preload
```

**Implementation:**
- All traffic encrypted end-to-end
- HTTPS enforced on all pages
- HTTP redirects to HTTPS
- Security headers set on all responses

### Database Encryption (At Rest)

**Configuration:**
```
Algorithm: AES-256-GCM
Key Management: Supabase managed keys
Backup Encryption: Enabled
```

**Implementation:**
- All database tables encrypted at rest
- Automatic key rotation
- Encrypted backups
- Secure key storage

### Application Security

**Headers Implemented:**
```
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Content-Security-Policy: restrictive policy
Referrer-Policy: strict-origin-when-cross-origin
```

---

## Authentication & Access Control

### User Authentication
- Email/password authentication via Supabase Auth
- Optional OAuth2 (Google, Microsoft)
- Session management with automatic refresh
- Secure password reset flow

### Access Control
- Role-based access control (RBAC)
- Participant: Can only access own data
- Support Worker: Can access assigned participants
- Admin: Full system access (audit trail)

### Session Security
- Secure session tokens (JWT)
- Token expiration: 1 hour
- Refresh token expiration: 7 days
- Automatic logout on inactivity

---

## Privacy & Data Handling

### Data Collection
- **Minimal Collection:** Only essential data collected
- **Consent:** Explicit consent for data collection
- **Purpose:** Data used only for stated purposes

### Data Retention
- **Active Users:** Data retained while account active
- **Inactive Users:** Data retained for 12 months after account closure
- **Deletion:** Secure deletion upon request

### Data Sharing
- **No Third Parties:** Data not shared with external parties
- **No Marketing:** No use for marketing or profiling
- **No Sale:** Data never sold or commercialized

### Privacy Policy
- ✅ Comprehensive privacy policy available
- ✅ Clear data handling procedures
- ✅ User rights clearly stated
- ✅ Contact information for privacy inquiries

---

## Audit & Logging

### Activity Logging
- All user actions logged
- Database changes tracked
- Login/logout events recorded
- Administrative actions audited

### Log Retention
- **Active Logs:** 90 days online
- **Archive Logs:** 2 years in secure storage
- **Compliance Logs:** Retained per Privacy Act requirements

### Log Access
- Logs accessible only to authorized personnel
- Audit trail of log access
- Encrypted log storage

---

## Incident Response

### Incident Response Plan
1. **Detection:** Automated monitoring & alerts
2. **Assessment:** Immediate impact assessment
3. **Containment:** Isolate affected systems
4. **Notification:** Notify affected participants within 24 hours
5. **Recovery:** Restore systems from backups
6. **Documentation:** Document incident & response

### Contact Information
- **Security Issues:** security@nourishu.com.au
- **Privacy Concerns:** privacy@nourishu.com.au
- **Incident Reporting:** incidents@nourishu.com.au

---

## Billing & Trial Phase

### Trial Phase (90 Days)
- **Cost:** Free for NDIS participants
- **Features:** Full access to all core features
- **No Payment Required:** No credit card needed
- **No Feature Lockout:** All features available during trial

### Billing Plans (Post-Trial)

#### Annual Plan
- **Cost:** $199.99 AUD per year
- **Payment:** Upfront payment
- **Billing Period:** 12 months
- **Features:** All premium features included

#### Monthly Plan
- **Cost:** $19.99 AUD per month
- **Payment:** Monthly recurring
- **Billing Period:** 1 month
- **Features:** All premium features included

### Payment Security
- ✅ Stripe payment processing (PCI DSS Level 1)
- ✅ No credit card data stored on servers
- ✅ Secure payment gateway
- ✅ Encrypted transaction records

---

## Compliance Checklist

### Pre-Deployment
- [x] Data residency configured (Sydney)
- [x] TLS 1.3 enforced
- [x] Database encryption enabled
- [x] Security headers configured
- [x] Privacy policy drafted
- [x] Terms of service drafted
- [x] Incident response plan documented
- [x] Audit logging enabled

### Post-Deployment
- [ ] Security audit completed
- [ ] Penetration testing completed
- [ ] Privacy impact assessment completed
- [ ] NDIS certification obtained
- [ ] Insurance coverage verified
- [ ] Backup & recovery tested
- [ ] Disaster recovery plan tested

---

## Deployment Information

### Vercel Deployment
- **Region:** Sydney (syd1)
- **SSL/TLS:** Automatic (Let's Encrypt)
- **Uptime SLA:** 99.95%
- **DDoS Protection:** Cloudflare included

### Supabase Backend
- **Region:** ap-southeast-2 (Sydney)
- **Database:** PostgreSQL 14+
- **Backup:** Automated daily backups
- **Redundancy:** Multi-AZ replication

---

## Support & Escalation

### Technical Support
- **Email:** support@nourishu.com.au
- **Response Time:** 24 hours
- **Availability:** Business hours (AEST)

### Privacy Support
- **Email:** privacy@nourishu.com.au
- **Response Time:** 48 hours
- **Availability:** Business hours (AEST)

### Escalation
- **Critical Issues:** Immediate escalation
- **Security Issues:** Immediate escalation
- **Privacy Issues:** 24-hour escalation

---

## Document Control

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 31, 2026 | Initial NDIS compliance documentation |

**Next Review:** June 30, 2026

---

**Document Prepared By:** Development Team  
**Reviewed By:** Compliance Officer  
**Approved By:** Project Manager  
**Effective Date:** May 31, 2026
