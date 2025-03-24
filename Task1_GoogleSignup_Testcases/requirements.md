# Requirements for Google Account Signup Process

This document outlines the functional and non-functional requirements observed during the Google account signup flow.

---

## 🧾 1. Field Requirements

| Field Name         | Required | Notes |
|--------------------|----------|-------|
| First Name         | ✅ Yes   | Must not be empty |
| Last Name          | ❌ No    | Optional |
| Birthday (Day)     | ✅ Yes   | Numeric |
| Birthday (Month)   | ✅ Yes   | Dropdown |
| Birthday (Year)    | ✅ Yes   | 4-digit numeric |
| Gender             | ✅ Yes   | Dropdown; "Rather not say" is valid |
| Username           | ✅ Yes   | Must be unique; validated |
| Password           | ✅ Yes   | Must comply with password policy |
| Confirm Password   | ✅ Yes   | Must match Password |
| Review Page        | ✅ Yes   | Final confirmation step |

---

## 🔐 2. Security Requirements

- **Password Policy:**
  - Minimum 8 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 number or symbol
  - No common passwords allowed
- **Password Match:** Confirm Password must exactly match Password
- **Username Validation:**
  - Must be unique
  - Cannot contain invalid characters
- **Field Validation:** Fields must reject:
  - Empty required fields
  - Invalid formats (e.g., numbers in name, letters in birthday)

---

## 🎯 3. User Experience Requirements

- Real-time validation feedback (e.g., red border or error message)
- Error messages must be clear and user-friendly
- Tab order should be logical and support keyboard navigation
- Mobile responsive design
- Accessibility: fields should be label-associated and screen reader compatible
