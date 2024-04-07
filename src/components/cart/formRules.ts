const isValidEmail = (val: string) => {
    return val
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const isValidPhoneNumber = (val: string) => {
    return val.match(/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/);
};
type Rules =
    {
        minLength?: number;
        maxLength?: number;
        validate: (val: string) => boolean;
        msg: () => string;
        required?: boolean;
    }[]

export const emailRules: Rules = [
    {
        validate: function (val: string) {
            if (!val) {
                return true
            } else if (!isValidEmail(val)) {
                return false;
            } else {
                return true;
            }
        },
        msg: function () {
            return `is not valid!`;
        },
    }
];
export const nameRules = [
    {
        minLength: 5,
        validate: function (val: string) {
            if (!val) {
                return true
            } else if (val.length < this.minLength) {
                return false;
            } else {
                return true;
            }
        },
        msg: function () {
            return `must be at least ${this.minLength} characters`;
        },
    }
];
export const phoneRules = [
    {
        validate: function (val: string) {
            if (!val) {
                return true
            } else if (!isValidPhoneNumber(val)) {
                return false;
            } else {
                return true;
            }
        },
        msg: function () {
            return `is not valid!`;
        },
    }
]
export const addressRules = [
    {
        minLength: 10,
        validate: function (val: string) {
            if (!val) {
                return true
            } else if (val.length < this.minLength) {
                return false;
            } else {
                return true;
            }
        },
        msg: function () {
            return `must be at least ${this.minLength} characters`;
        },
    },
    {
        maxLength: 50,
        validate: function (val: string) {
            if (val.length > this.maxLength) {
                return false;
            } else {
                return true;
            }
        },
        msg: function () {
            return `must not exceed ${this.maxLength} characters`;
        },
    },
];
