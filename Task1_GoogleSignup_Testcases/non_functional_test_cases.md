# Non-Functional Test Cases for Google Signup

This document outlines non-functional test scenarios to validate performance, usability, and security aspects of the signup process.

---

## 🧪 TC01 - Performance: Signup Page Load Time

- **Objective:** Ensure signup page loads within acceptable time
- **Steps:**
  - Open https://accounts.google.com/signup
  - Measure page load time
- **Expected:** Page loads completely within 2 seconds

---

## 🧪 TC02 - Usability: Mobile Responsiveness

- **Objective:** Ensure the signup flow works correctly on mobile devices
- **Steps:**
  - Access signup page from a mobile browser (e.g., Chrome on Android)
  - Complete the signup process
- **Expected:** Fields are accessible and layout is responsive

---

## 🧪 TC03 - Security: Password Field Masking

- **Objective:** Ensure password is masked for privacy
- **Steps:**
  - Type password in the Password and Confirm Password fields
- **Expected:** Input is hidden (●●●●●) unless "Show password" is selected

---

## 🧪 TC04 - Accessibility: Screen Reader Compatibility (Bonus)

- **Objective:** Ensure signup fields are accessible by screen readers
- **Steps:**
  - Use screen reader software (e.g., NVDA)
  - Navigate through signup form
- **Expected:** Field labels and inputs are announced properly

---

These non-functional tests help ensure the signup form is performant, secure, and user-friendly across different devices and accessibility needs.
