module.exports = new class Constants {
     USER = {
        NAME: 'Ann',
        COUNTY: 'United States',
        EMAIL: '7237wmm16sb@gmail.com',
        PASSWORD: 'user123456',
        COMPANY_NAME: 'TESVAN',
        ADDRESS:'Los Angeles, CA 90001',
        MOBILE_NUMBER: '(000) 000-0000',
        STREET_NUMBER: '45',
        STREET: 'Pickedly',
        STATE: 'CA',
        CITY: 'Los Angeles',
        ZIP: '90001',
        DAY: '25',
        MONTH: 'March',
        YEAR: '2000',
    };

     MESSAGE = [
        'Please fill out this field.',
        'Email Address already exist!',
        'Your email or password is incorrect!',
        'Please include an \'@\' in the email address. \'7237wmm1\' is missing an \'@\'.'
    ];


     RANDOM_NAMES = ['Ann', 'Sara', 'John', 'Hannah','Jack','Lara','Lea','Jane'];


     RANDOM_LAST_NAMES = ['James', 'Parker', 'Smith', 'Brown','Johnson','Williams','Miller','Davis'];


     randName() {
        return Constants.RANDOM_NAMES[Constants.rand(0, Constants.RANDOM_NAMES.length - 1)];
    }


     randLastName() {
        return Constants.RANDOM_LAST_NAMES[Constants.rand(0, Constants.RANDOM_LAST_NAMES.length - 1)];
    }


     rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


     randomEmail() {
        const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (let e = 0; e < 10; e++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }


     randStr() {
        return Math.random().toString(36).substr(2, 10);
    }
}

