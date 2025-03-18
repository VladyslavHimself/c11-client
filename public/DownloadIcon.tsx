export default function DownloadIcon({ fill = 'white', ...props}) {
    return (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 16.25C5.19891 16.25 5.38968 16.329 5.53033 16.4697C5.67098 16.6103 5.75 16.8011 5.75 17V19C5.75 19.138 5.862 19.25 6 19.25H18C18.0663 19.25 18.1299 19.2237 18.1768 19.1768C18.2237 19.1299 18.25 19.0663 18.25 19V17C18.25 16.8011 18.329 16.6103 18.4697 16.4697C18.6103 16.329 18.8011 16.25 19 16.25C19.1989 16.25 19.3897 16.329 19.5303 16.4697C19.671 16.6103 19.75 16.8011 19.75 17V19C19.75 19.4641 19.5656 19.9092 19.2374 20.2374C18.9092 20.5656 18.4641 20.75 18 20.75H6C5.53587 20.75 5.09075 20.5656 4.76256 20.2374C4.43437 19.9092 4.25 19.4641 4.25 19V17C4.25 16.8011 4.32902 16.6103 4.46967 16.4697C4.61032 16.329 4.80109 16.25 5 16.25Z" fill={fill} />
            <path d="M10.738 3.75C10.4897 3.74961 10.2503 3.84253 10.0673 4.01034C9.88431 4.17815 9.77105 4.4086 9.74998 4.656C9.5974 6.40849 9.57 8.16962 9.66798 9.926C9.42131 9.93934 9.17465 9.955 8.92798 9.973L7.43798 10.082C7.30676 10.0916 7.18028 10.1351 7.07092 10.2083C6.96156 10.2815 6.87307 10.3818 6.81411 10.4994C6.75514 10.617 6.72773 10.7479 6.73454 10.8793C6.74135 11.0107 6.78217 11.1381 6.85298 11.249C7.91573 12.9105 9.2839 14.3553 10.885 15.507L11.482 15.936C11.6331 16.0441 11.8142 16.1023 12 16.1023C12.1858 16.1023 12.3669 16.0441 12.518 15.936L13.115 15.507C14.7161 14.3553 16.0842 12.9105 17.147 11.249C17.2178 11.1381 17.2586 11.0107 17.2654 10.8793C17.2722 10.7479 17.2448 10.617 17.1859 10.4994C17.1269 10.3818 17.0384 10.2815 16.929 10.2083C16.8197 10.1351 16.6932 10.0916 16.562 10.082L15.072 9.973C14.8255 9.95516 14.5788 9.93949 14.332 9.926C14.4303 8.16964 14.4032 6.40851 14.251 4.656C14.2299 4.40843 14.1165 4.17784 13.9333 4.01C13.7501 3.84217 13.5104 3.74936 13.262 3.75H10.738Z" fill={fill} />
        </svg>

    );
};