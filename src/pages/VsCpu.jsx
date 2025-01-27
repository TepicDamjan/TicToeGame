import '../styles/Table.css';
export function VsCpu(){

    return (
        <div className="container">

            <div className="headerWrapper">

            <div className="logoWrapper">
            <svg width="72" height="32" viewBox="0 0 72 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 2">
            <path id="Combined Shape Copy" fillRule="evenodd" clipRule="evenodd" d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z" fill="#31C3BD"/>
            <path id="Oval Copy" fillRule="evenodd" clipRule="evenodd" d="M71.9704 15.8706C71.9704 7.10551 64.8649 0 56.0998 0C47.3348 0 40.2292 7.10551 40.2292 15.8706C40.2292 24.6357 47.3348 31.7412 56.0998 31.7412C64.8649 31.7412 71.9704 24.6357 71.9704 15.8706ZM49.634 15.8706C49.634 12.2996 52.5289 9.4048 56.0998 9.4048C59.6708 9.4048 62.5656 12.2996 62.5656 15.8706C62.5656 19.4416 59.6708 22.3364 56.0998 22.3364C52.5289 22.3364 49.634 19.4416 49.634 15.8706Z" fill="#F2B137"/>
            </g>
            </svg>
            </div>

            <div className="turnWrapper">

            </div>
                <button className="resetButton">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5241 2.75843e-07H17.644C17.3812 -0.000279724 17.1679 0.21264 17.1676 0.47564C17.1676 0.48336 17.1678 0.49108 17.1681 0.4988L17.3268 3.78292C15.46 1.58176 12.7198 0.31428 9.83484 0.31744C4.41536 0.31748 -0.00395734 4.74324 2.65924e-06 10.1663C0.00396266 15.598 4.40584 20 9.83484 20C12.2702 20.0034 14.6195 19.0993 16.425 17.4639C16.6208 17.2885 16.6375 16.9874 16.4622 16.7915C16.4563 16.7849 16.4502 16.7785 16.444 16.7722L15.0957 15.423C14.9186 15.2459 14.6346 15.2363 14.4461 15.4012C11.5521 17.949 7.14188 17.6669 4.59564 14.7709C2.0494 11.875 2.3314 7.46188 5.22544 4.914C8.11948 2.36612 12.5297 2.64828 15.0759 5.54424C15.2755 5.77124 15.4601 6.01096 15.6287 6.26188L11.6024 6.06864C11.3398 6.05616 11.1169 6.25896 11.1044 6.52168C11.104 6.5294 11.1038 6.53712 11.1039 6.54484V8.4262C11.1039 8.6892 11.3169 8.9024 11.5798 8.9024H19.5242C19.787 8.9024 20 8.6892 20 8.4262V0.4762C20 0.2132 19.787 2.75843e-07 19.5241 2.75843e-07Z" fill="#1F3641"/>
                </svg>
                </button>
            </div>

            <div className="tableWrapper">

                <div className='field'></div>
                <div className='field'></div>
                <div className='field'></div>
                <div className='field'></div>
                <div className='field'></div>
                <div className='field'></div>
                <div className='field'></div>
                <div className='field'></div>
                <div className='field'></div>


            </div>

            <div className="resultWrapper">
                <dir className="x-resut">

                </dir>

                <dir className="ties-resut">

                </dir>

                <dir className="o-resut">

                </dir>
            </div>

        </div>
    )
};