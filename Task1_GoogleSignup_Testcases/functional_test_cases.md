# Functional Test Cases for Google Signup

This document contains functional test scenarios for each step in the Google account signup process.

---

## ✅ Step 1 – Name Entry

### TC01 - Verify required field: First Name
- **Input:** Leave First Name empty
- **Expected:** Error message "Enter your first name"

### TC02 - Verify optional field: Last Name
- **Input:** Leave Last Name empty
- **Expected:** User can proceed to next step

### TC03 - Enter valid First and Last Name
- **Input:** John, Doe
- **Expected:** Proceeds to next step without error

---

## ✅ Step 2 – Birth Date & Gender

### TC04 - Leave birthday fields empty
- **Input:** No day/month/year
- **Expected:** Error message(s) shown, cannot proceed

### TC05 - Enter invalid year (e.g., text)
- **Input:** "abcd"
- **Expected:** Field error shown

### TC06 - Gender not selected
- **Input:** Leave Gender unselected
- **Expected:** Error message "Select your gender"

### TC07 - Valid birthday and gender
- **Input:** 1 January 1995, Male
- **Expected:** Proceeds to next step

---

## ✅ Step 3 – Username & Password

### TC08 - Enter already-taken username
- **Input:** commonname123
- **Expected:** "That username is taken" message shown

### TC09 - Passwords do not match
- **Input:** Password = Test1234!, Confirm = Test123
- **Expected:** Error "Passwords don't match"

### TC10 - Password policy violation
- **Input:** "12345"
- **Expected:** Password too weak error

### TC11 - Valid username and matching password
- **Input:** Valid & available username, compliant password
- **Expected:** Proceeds to review page

---

## ✅ Step 4 – Review Page

### TC12 - Review and continue
- **Action:** Click Next
- **Expected:** Proceeds to terms & conditions page

---

## ✅ Step 5 – Terms and Privacy Agreement

### TC13 - View privacy terms
- **Action:** Scroll through the terms
- **Expected:** "I Agree" button becomes clickable

### TC14 - Accept terms
- **Action:** Click "I Agree"
- **Expected:** User proceeds to account creation

---

## ✅ Step 6 – Account Confirmation

### TC15 - Redirect to My Account page
- **Expected:** Redirect to https://myaccount.google.com
- **Assertion:** Welcome banner or user dashboard appears
