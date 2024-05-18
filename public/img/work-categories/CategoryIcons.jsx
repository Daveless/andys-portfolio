import React from 'react'

const CategoryIcons = ({category}) => {
    switch (category) {
        case 'all':
            return  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="18" viewBox="0 0 29 28" fill="none">
                    <path d="M1 0.931885H9.44851V9.3804H1V0.931885Z" stroke="black"/>
                    <path d="M10.4484 0.931885H18.8969V9.3804H10.4484V0.931885Z" stroke="black"/>
                    <path d="M19.8969 0.931885H28.3454V9.3804H19.8969V0.931885Z" stroke="black"/>
                    <path d="M1 18. 7172H9.44851V27.1657H1V18.7172Z" stroke="black"/>
                    <path d="M10.4484 18.7172H18.8969V27.1657H10.4484V18.7172Z" stroke="black"/>
                    <path d="M19.8969 18.7172H28.3454V27.1657H19.8969V18.7172Z" stroke="black"/>
                    <path d="M1 10.3804H9.44851V18.8289H1V10.3804Z" stroke="black"/>
                    <path d="M10.4484 10.3804H18.8969V18.8289H10.4484V10.3804Z" stroke="black"/>
                    <path d="M19.8969 10.3804H28.3454V18.8289H19.8969V10.3804Z" stroke="black"/>
                    </svg>
            break;
        case 'design':
            return  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 27" fill="none">
                    <rect x="1" y="0.5" width="27" height="26" stroke="black"/>
                    <circle cx="20" cy="18.5" r="8" stroke="black"/>
                    <path d="M19.9975 3.95025C19.97 3.67548 19.725 3.475 19.4502 3.50248L14.9726 3.95025C14.6978 3.97772 14.4973 4.22274 14.5248 4.49752C14.5523 4.77229 14.7973 4.97276 15.0721 4.94528L19.0522 4.54727L19.4502 8.52742C19.4777 8.80219 19.7227 9.00266 19.9975 8.97518C20.2723 8.94771 20.4728 8.70269 20.4453 8.42791L19.9975 3.95025ZM1.88698 26.3166L19.887 4.31662L19.113 3.68338L1.11302 25.6834L1.88698 26.3166Z" fill="black"/>
                    <path d="M7.5 1L13.1292 10.75H1.87083L7.5 1Z" fill="black"/>
                    </svg>
            break;
        case 'marketing':
            return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 27" fill="none">
                    <rect x="1" y="0.5" width="23" height="20" rx="2.5" stroke="black"/>
                    <path d="M12 26L16.5 21H7.5L12 26Z" stroke="black"/>
                    </svg>
            break;
        case 'web':
            return  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="19" viewBox="0 0 39 28" fill="none">
                    <path d="M32.9286 22.3778V1H6.64286V21.8M32.9286 22.3778L37.5 27H1.5L6.64286 21.8M32.9286 22.3778H6.64286V21.8M9.5 4.46667V18.9111H29.5V4.46667H9.5Z" stroke="#B3B2B2"/>
                    </svg>
            break;
    }
}

export default CategoryIcons