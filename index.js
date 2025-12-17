function generatePassword() {
    const password_1 = document.getElementById('password_1');
    const password_2 = document.getElementById('password_2');

    const generateSecureStr = (length) => {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const array = new Uint32Array(length);
        window.crypto.getRandomValues(array);

        if (document.getElementById('includeNum').checked && document.getElementById('includeMark').checked) {
            chars += "0123456789!@#$%^&*()<>?:;-_=+";
            return Array.from(array, (num) => chars[num % chars.length]).join("");
        } else if (document.getElementById('includeNum').checked) {
            chars += "0123456789";
            return Array.from(array, (num) => chars[num % chars.length]).join("");
        } else if (document.getElementById('includeMark').checked) {
            chars += "!@#$%^&*()<>?:;-_=+";
            return Array.from(array, (num) => chars[num % chars.length]).join("");
        } else {
            return Array.from(array, (num) => chars[num % chars.length]).join("");
        }
    };

    password_1.innerText = generateSecureStr(16);
    password_2.innerText = generateSecureStr(16);

}



function showToast() {
    const toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 2000);
}

function copyText(num) {
    const text_1 = document.getElementById('password_1').innerText;
    const text_2 = document.getElementById('password_2').innerText;
    if (num === 1) {
        navigator.clipboard.writeText(text_1).then(() => {
            showToast();
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    } else if (num === 2) {
        navigator.clipboard.writeText(text_2).then(() => {
            showToast();
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
}


