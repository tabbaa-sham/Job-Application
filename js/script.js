
// ========================================= 
// MALEK TRAVEL & TOURISM 
// CAREER APPLICATION - JAVASCRIPT 
// =========================================
// ========================================= 
// 1. FORM ELEMENTS 
// =========================================
const form = document.getElementById("jobApplicationForm");
const submitButton = document.getElementById("submitButton");
const successModal = document.getElementById("successModal");
const closeSuccessModal = document.getElementById("closeSuccessModal");
const successDoneButton = document.getElementById("successDoneButton");
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw6wEN33P1kxESXFGJeIAuzmN5R3JPDhsC8_YsBeaQnHLVi9K1hOuJd8irKW2SB8zKV3Q/exec";
// ========================================= 
// 2. PHONE NUMBER 
// =========================================
const phoneInput = document.getElementById("phone");
let iti = null;
if (phoneInput && window.intlTelInput) {
    iti = window.intlTelInput(phoneInput, {
        initialCountry: "sy",
        separateDialCode: true,
        preferredCountries: [
            "sy",
            "sa",
            "kw",
            "qa",
            "ae",
            "om",
            "bh",
            "lb",
            "jo",
            "iq",
            "eg",
            "tr",
            "gb",
            "de",
            "fr",
            "us",
            "ca",
            "ir"
        ],

        utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js"
    });
}
// ========================================= 
// 3. RELATIVES WORKING AT COMPANY 
// =========================================
const relativeYes = document.getElementById("relativeYes");
const relativeNo = document.getElementById("relativeNo");
const relativeDetails = document.getElementById("relativeDetails");
function updateRelativeDetails() {
    if (!relativeDetails) {
        return;
    }

    if (relativeYes && relativeYes.checked) {
        relativeDetails.style.display = "block";
    } else {
        relativeDetails.style.display = "none";
    }
}
if (relativeYes) {
    relativeYes.addEventListener("change", updateRelativeDetails);
}
if (relativeNo) {
    relativeNo.addEventListener("change", updateRelativeDetails);
}
updateRelativeDetails();
// ========================================= 
// 4. REMOVE BUTTON 
// =========================================
function createRemoveButton() {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "remove-item-button";
    button.innerHTML = "&times;";
    button.setAttribute("aria-label", "Remove");

    button.addEventListener("click", function () {

        const item = button.parentElement;

        if (item) {
            item.remove();
        }
    });

    return button;
}
// ========================================= 
// 5. EDUCATION 
// =========================================
const educationContainer =
    document.getElementById("educationContainer");
const addEducation =
    document.getElementById("addEducation");
if (educationContainer && addEducation) {
    addEducation.addEventListener("click", function () {

        const item = document.createElement("div");

        item.className = "repeatable-item education-item";

        item.innerHTML = `

        <div class="form-row">

            <div class="form-group">

                <label>
                    Education Level
                </label>

                <select name="educationLevel[]">

                    <option value="">
                        Select Education Level
                    </option>

                    <option value="High School">
                        High School
                    </option>

                    <option value="Diploma">
                        Diploma
                    </option>

                    <option value="Bachelor's Degree">
                        Bachelor's Degree
                    </option>

                    <option value="Master's Degree">
                        Master's Degree
                    </option>

                    <option value="PhD">
                        PhD
                    </option>

                    <option value="Other">
                        Other
                    </option>

                </select>

            </div>

            <div class="form-group">

                <label>
                    University / Institution
                </label>

                <input
                    type="text"
                    name="university[]"
                    placeholder="University or institution"
                >

            </div>

        </div>

        <div class="form-row">

            <div class="form-group">

                <label>
                    Major / Field of Study
                </label>

                <input
                    type="text"
                    name="major[]"
                    placeholder="Major or field of study"
                >

            </div>

            <div class="form-group">

                <label>
                    Graduation Year
                </label>

                <input
                    type="number"
                    name="graduationYear[]"
                    placeholder="e.g. 2025"
                    min="1950"
                    max="2100"
                >

            </div>

        </div>
    `;

        item.appendChild(createRemoveButton());

        educationContainer.appendChild(item);
    });
}
// ========================================= 
// 6. TRAINING & COURSES 
// =========================================
const courseContainer =
    document.getElementById("coursesContainer");
const addCourse =
    document.getElementById("addCourse");
if (courseContainer && addCourse) {
    addCourse.addEventListener("click", function () {

        const item = document.createElement("div");

        item.className = "repeatable-item course-item";

        item.innerHTML = `

        <div class="form-row">

            <div class="form-group">

                <label>
                    Course Name
                </label>

                <input
                    type="text"
                    name="courseName[]"
                    placeholder="Course name"
                >

            </div>

            <div class="form-group">

                <label>
                    Training Provider
                </label>

                <input
                    type="text"
                    name="courseProvider[]"
                    placeholder="Training provider"
                >

            </div>

        </div>

        <div class="form-row">

            <div class="form-group">

                <label>
                    Year
                </label>

                <input
                    type="number"
                    name="courseYear[]"
                    placeholder="e.g. 2025"
                    min="1950"
                    max="2100"
                >

            </div>

            <div class="form-group">

                <label>
                    Duration
                </label>

                <input
                    type="text"
                    name="courseDuration[]"
                    placeholder="e.g. 3 months"
                >

            </div>

        </div>
    `;

        item.appendChild(createRemoveButton());

        courseContainer.appendChild(item);
    });
}
// ========================================= 
// 7. WORK EXPERIENCE 
// =========================================
const experienceContainer =
    document.getElementById("experienceContainer");
const addExperience =
    document.getElementById("addExperience");
if (experienceContainer && addExperience) {
    addExperience.addEventListener("click", function () {

        const item = document.createElement("div");

        item.className = "repeatable-item experience-item";

        item.innerHTML = `

        <div class="form-row">

            <div class="form-group">

                <label>
                    Company Name
                </label>

                <input
                    type="text"
                    name="companyName[]"
                    placeholder="Company name"
                >

            </div>

            <div class="form-group">

                <label>
                    Position / Job Title
                </label>

                <input
                    type="text"
                    name="jobTitle[]"
                    placeholder="Job title"
                >

            </div>

        </div>

        <div class="form-row">

            <div class="form-group">

                <label>
                    Start Date
                </label>

                <input
                    type="date"
                    name="workStartDate[]"
                >

            </div>

            <div class="form-group">

                <label>
                    End Date
                </label>

                <input
                    type="date"
                    name="workEndDate[]"
                >

            </div>

        </div>

        <div class="form-group">

            <label>
                Experience Details
            </label>

            <textarea
                name="experienceDetails[]"
                rows="5"
                placeholder="Describe your responsibilities and achievements"
            ></textarea>

        </div>
    `;

        item.appendChild(createRemoveButton());

        experienceContainer.appendChild(item);
    });
}
// ========================================= 
// 8. LANGUAGES 
// =========================================
const languagesContainer =
    document.getElementById("languagesContainer");
const addLanguage =
    document.getElementById("addLanguage");
if (languagesContainer && addLanguage) {
    addLanguage.addEventListener("click", function () {

        const item = document.createElement("div");

        item.className = "repeatable-item language-item";

        item.innerHTML = `

        <div class="form-row">

            <div class="form-group">

                <label>
                    Language
                </label>

                <input
                    type="text"
                    name="language[]"
                    placeholder="Example: English"
                >

            </div>

            <div class="form-group">

                <label>
                    Level
                </label>

                <select name="languageLevel[]">

                    <option value="">
                        Select level
                    </option>

                    <option value="native">
                        Native
                    </option>

                    <option value="fluent">
                        Fluent
                    </option>

                    <option value="advanced">
                        Advanced
                    </option>

                    <option value="intermediate">
                        Intermediate
                    </option>

                    <option value="basic">
                        Basic
                    </option>

                </select>

            </div>

        </div>
    `;

        item.appendChild(createRemoveButton());

        languagesContainer.appendChild(item);

    });
}
// ========================================= 
// 9. COMPUTER SKILLS 
// =========================================
const computerSkillsContainer =
    document.getElementById("computerSkillsContainer");
const addComputerSkill =
    document.getElementById("addComputerSkill");
if (computerSkillsContainer && addComputerSkill) {
    addComputerSkill.addEventListener("click", function () {

        const item = document.createElement("div");

        item.className =
            "repeatable-item computer-skill-item";

        item.innerHTML = `

        <div class="form-row">

            <div class="form-group">

                <label>
                    Program / Software
                </label>

                <input
                    type="text"
                    name="computerProgram[]"
                    placeholder="e.g. Microsoft Excel"
                >

            </div>

            <div class="form-group">

                <label>
                    Level
                </label>

                <select name="computerProgramLevel[]">

                    <option value="">
                        Select Level
                    </option>

                    <option value="Expert">
                        Expert
                    </option>

                    <option value="Advanced">
                        Advanced
                    </option>

                    <option value="Intermediate">
                        Intermediate
                    </option>

                    <option value="Basic">
                        Basic
                    </option>

                </select>

            </div>

        </div>
    `;

        item.appendChild(createRemoveButton());

        computerSkillsContainer.appendChild(item);
    });
}
// ========================================= 
// 10. SKILLS 
// =========================================
const skillsContainer =
    document.getElementById("skillsContainer");
const addSkill =
    document.getElementById("addSkill");
if (skillsContainer && addSkill) {
    addSkill.addEventListener("click", function () {

        const item = document.createElement("div");

        item.className = "skill-item";

        const input = document.createElement("input");

        input.type = "text";
        input.name = "skills[]";
        input.placeholder = "Enter a skill";

        item.appendChild(input);

        item.appendChild(createRemoveButton());

        skillsContainer.appendChild(item);

        input.focus();
    });
}
// ========================================= 
// 11. SUCCESS MODAL 
// =========================================
function showSuccessModal() {
    if (successModal) {
        successModal.classList.add("show");
    }
}
function hideSuccessModal() {
    if (successModal) {
        successModal.classList.remove("show");
    }

    if (form) {
        form.reset();
    }

    if (iti) {
        iti.setNumber("");
    }

    if (relativeDetails) {
        relativeDetails.style.display = "none";
    }

    if (submitButton) {

        submitButton.disabled = false;

        submitButton.textContent =
            "Submit Application";
    }
}
// ========================================= 
// 12. SUCCESS MODAL CONTROLS 
// =========================================
if (closeSuccessModal) {
    closeSuccessModal.addEventListener(
        "click",
        hideSuccessModal
    );
}
if (successDoneButton) {
    successDoneButton.addEventListener(
        "click",
        hideSuccessModal
    );
}
if (successModal) {
    successModal.addEventListener(
        "click",
        function (event) {

            if (event.target === successModal) {
                hideSuccessModal();
            }

        }
    );
}
// ========================================= 
// 13. FORM SUBMISSION 
// =========================================
if (form) {
    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        const formData = new FormData(form);

        // =====================================
        // FULL NAME
        // =====================================

        const fullName =
            (formData.get("fullName") || "").trim();

        if (!fullName) {
            alert("Please enter your full name.");
            return;
        }

        // =====================================
        // PHONE
        // =====================================

        if (
            !phoneInput ||
            !phoneInput.value.trim()
        ) {

            alert("Please enter your phone number.");

            if (phoneInput) {
                phoneInput.focus();
            }

            return;
        }

        if (iti) {

            const phoneValue = phoneInput.value.trim();

            const countryData = iti.getSelectedCountryData();
            const fullPhoneNumber = countryData.dialCode
                ? "+" + countryData.dialCode + phoneValue.replace(/^0+/, "")
                : phoneValue;
            console.log("PHONE INPUT:", phoneInput.value);
            console.log("ITI NUMBER:", fullPhoneNumber);

            formData.set(
                "phone", fullPhoneNumber || phoneValue
            );
        }

        // =====================================
        // EMAIL
        // =====================================

        const email =
            (formData.get("email") || "").trim();

        if (!email) {

            alert(
                "Please enter your email address."
            );

            return;
        }

        // =====================================
        // POSITION
        // =====================================

        const position =
            formData.get("position");

        if (!position) {

            alert(
                "Please select the position you are applying for."
            );

            return;
        }

        // =====================================
        // CV
        // =====================================

        const cvInput =
            document.getElementById("cv");

        if (
            !cvInput ||
            cvInput.files.length === 0
        ) {

            alert("Please upload your CV.");

            return;
        }

        const cvFile =
            cvInput.files[0];

        // =====================================
        // CV FILE TYPE
        // =====================================

        const fileExtension =
            cvFile.name
                .split(".")
                .pop()
                .toLowerCase();

        const allowedExtensions = [
            "pdf",
            "doc",
            "docx"
        ];

        if (
            !allowedExtensions.includes(
                fileExtension
            )
        ) {

            alert(
                "Please upload your CV as a PDF, DOC, or DOCX file."
            );

            return;
        }

        // =====================================
        // CV FILE SIZE
        // =====================================

        const maxFileSize =
            10 * 1024 * 1024;

        if (cvFile.size > maxFileSize) {

            alert(
                "Your CV must be smaller than 10 MB."
            );

            return;
        }

        // =====================================
        // CONFIRMATION
        // =====================================

        const confirmation =
            document.getElementById("confirmation");

        if (
            !confirmation ||
            !confirmation.checked
        ) {

            alert(
                "Please confirm that the information provided is correct."
            );

            return;
        }

        // =====================================
        // PREPARE DATA
        // =====================================

        if (submitButton) {

            submitButton.disabled = true;

            submitButton.textContent =
                "Submitting...";
        }

        try {

            const data = {};

            // =====================================
            // FORM DATA → OBJECT
            // =====================================

            for (const [name, value] of formData.entries()) {

                if (value instanceof File) {
                    continue;
                }

                const key = name.endsWith("[]")
                    ? name.slice(0, -2)
                    : name;

                if (data[key]) {

                    if (!Array.isArray(data[key])) {
                        data[key] = [data[key]];
                    }

                    data[key].push(value);

                } else {

                    data[key] = value;
                }
            }

            console.log("FORM DATA:", data);
            console.log("PHONE SENT:", data.phone);

            // =====================================
            // CV → BASE64
            // =====================================

            const cvBase64 =
                await fileToBase64(cvFile);

            data.cv = {
                name: cvFile.name,
                type: cvFile.type,
                data: cvBase64
            };

            // =====================================
            // SEND TO GOOGLE APPS SCRIPT
            // =====================================

            const response = await fetch(
                GOOGLE_SCRIPT_URL,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },
                    body: JSON.stringify(data)
                }
            );
            const result = await response.json();
            console.log("Google Apps Script response:", result);

            // =====================================
            // SUCCESS
            // =====================================

            console.log(
                "Application submitted successfully."
            );

            showSuccessModal();

            form.reset();

            if (iti) {
                iti.setCountry("sy");
                iti.setNumber("");
            }

        } catch (error) {

            console.error(
                "Submission error:",
                error
            );

            alert(
                "Something went wrong while submitting your application. Please try again."
            );

        } finally {

            if (submitButton) {

                submitButton.disabled = false;

                submitButton.textContent =
                    "Submit Application";
            }
        }

    });
}
// ========================================= 
// CONVERT FILE TO BASE64 
// =========================================
function fileToBase64(file) {
    return new Promise((resolve, reject) => {

        const reader =
            new FileReader();

        reader.onload = function () {

            const result =
                reader.result;

            // Remove:
            // data:application/pdf;base64,
            // and keep only the Base64 content

            const base64 =
                result.split(",")[1];

            resolve(base64);
        };

        reader.onerror = function () {

            reject(
                new Error("Could not read the CV file.")
            );
        };

        reader.readAsDataURL(file);
    });
}
