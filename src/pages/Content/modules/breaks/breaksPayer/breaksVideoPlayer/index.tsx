import React, { useState } from 'react';
import BreaksPlayer from './BreaksPlayer';

import { BreakEvent } from '../../../../../../lib/api/breaks/types';
import { AVAILABLE_LANGUAGES } from '../../../../../../lib/context/App/storage';
import i18n from '../../../../../../lib/config/i18n';
import translations from '../../translation';

export type IVideoFile = {
  url: string;
  name: string;
  description: string;
};

type BreaksModalProps = {
  open: boolean;
  breakCompleted: (event: BreakEvent) => void;
  videoFile: IVideoFile;
  language: AVAILABLE_LANGUAGES;
};

const BreaksModal: React.FC<BreaksModalProps> = ({
  open,
  breakCompleted,
  videoFile,
  language,
}) => {
  const [showRatings, setShowRatings] = useState(false);

  if (!open) return <></>;

  return (
    <div
      id="breakModal"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        background: '#00000040',
        margin: '0 auto',
        overflowY: 'auto',
        width: '100%',
        height: '100%',
        pointerEvents: 'all',
      }}
    >
      <div
        style={{
          position: 'relative',
          top: 0,
          height: '100%',
          margin: '0 auto',
          padding: '0px',
          maxWidth: '400px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          // className="h-[570px] w-full shadow-lg rounded-md bg-white"
          style={{
            height: '570px',
            width: '100%',
            borderRadius: '10px',
            background: '#fff',
          }}
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <div
            style={{
              background: '#5C667C',
              height: '48px',
              padding: ' 0 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '10px 10px 0 0',
            }}
          >
            <svg
              width="113"
              height="22"
              viewBox="0 0 113 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.74763 21.4187C5.71499 20.8527 4.76029 20.1309 3.91324 19.267C1.65122 16.9617 0.427785 13.9177 0.467874 10.6975C0.507962 7.47666 1.80638 4.46451 4.12482 2.21513C4.91842 1.44528 5.80036 0.795728 6.74763 0.276367V2.77553C6.34823 3.06209 5.96814 3.3805 5.60957 3.72792C3.69795 5.58248 2.6267 8.06678 2.59404 10.7237C2.56137 13.3807 3.57026 15.8897 5.43511 17.791C5.84416 18.2078 6.28365 18.5849 6.74763 18.9189V16.5152C5.3 14.9975 4.51754 13.0099 4.54352 10.9084C4.56802 8.87271 5.34974 6.96296 6.74763 5.49828V16.3971C6.76842 16.419 6.78921 16.4402 6.80999 16.4622C8.32147 17.9905 10.3459 18.8467 12.5107 18.8736C12.5448 18.8743 12.5797 18.8743 12.6139 18.8743C14.7401 18.8743 16.7452 18.0698 18.2701 16.6023C19.8194 15.1107 20.6872 13.1139 20.714 10.9785C20.7407 8.84299 19.9226 6.82569 18.4111 5.29733C16.8996 3.76825 14.8752 2.91209 12.7111 2.88591C12.677 2.8852 12.6421 2.8852 12.6079 2.8852C10.4818 2.8852 8.47663 3.68971 6.95179 5.15723C6.882 5.22445 6.81445 5.29308 6.74763 5.36172V2.83921C8.44545 1.62854 10.4781 0.976867 12.6072 0.976867C12.6495 0.976867 12.6918 0.977575 12.7349 0.977575C15.4156 1.01012 17.9241 2.07078 19.7964 3.96425C21.6686 5.85773 22.682 8.35688 22.6486 11.0018C22.6152 13.6467 21.5402 16.1204 19.6212 17.9679C17.7021 19.8154 15.1691 20.8123 12.4869 20.7812C10.3957 20.7557 8.40907 20.1048 6.74763 18.9203V21.4187Z"
                fill="url(#paint0_radial_1400_2127)"
              />
              <path
                d="M37.381 9.57696C37.9068 9.86067 38.321 10.2575 38.6181 10.7658C38.9152 11.2758 39.0647 11.8641 39.0647 12.5307C39.0647 13.1991 38.9152 13.7891 38.6181 14.3026C38.321 14.8161 37.9086 15.2147 37.381 15.4984C36.8534 15.7821 36.2591 15.9248 35.5928 15.9248C35.0832 15.9248 34.6168 15.8291 34.1937 15.6376C33.7705 15.4462 33.4211 15.1659 33.1438 14.7987V15.85H31.9517V6.56055H33.196V10.2157C33.4716 9.86589 33.8173 9.59959 34.2315 9.42031C34.6456 9.24103 35.0994 9.15052 35.591 9.15052C36.2591 9.15226 36.8552 9.29325 37.381 9.57696ZM36.6751 14.5794C37.0244 14.3827 37.3017 14.1077 37.5034 13.7526C37.7069 13.3975 37.8078 12.9902 37.8078 12.5324C37.8078 12.0729 37.7069 11.6674 37.5034 11.3123C37.2999 10.9572 37.0244 10.684 36.6751 10.4925C36.3257 10.301 35.9296 10.2053 35.4902 10.2053C35.058 10.2053 34.6654 10.301 34.3107 10.4925C33.956 10.684 33.6804 10.9572 33.4824 11.3123C33.2843 11.6674 33.1852 12.0747 33.1852 12.5324C33.1852 12.992 33.2843 13.3993 33.4824 13.7526C33.6804 14.1077 33.9578 14.3827 34.3107 14.5794C34.6654 14.776 35.058 14.8735 35.4902 14.8735C35.9314 14.8735 36.3257 14.776 36.6751 14.5794Z"
                fill="white"
              />
              <path
                d="M55.0681 15.5171C54.5423 15.2333 54.1281 14.8365 53.831 14.3282C53.5339 13.8183 53.3844 13.2299 53.3844 12.5633C53.3844 11.8949 53.5339 11.3049 53.831 10.7914C54.1281 10.2779 54.5405 9.87934 55.0681 9.59563C55.5957 9.31192 56.19 9.16919 56.8562 9.16919C57.3659 9.16919 57.8322 9.26492 58.2554 9.45638C58.6786 9.64785 59.0279 9.92808 59.3053 10.2953V9.24403H60.4974V15.8721H59.253V14.8783C58.9775 15.2281 58.6318 15.4944 58.2176 15.6737C57.8034 15.853 57.3496 15.9435 56.858 15.9435C56.19 15.9435 55.5939 15.8008 55.0681 15.5171ZM55.774 10.5164C55.4246 10.7131 55.1473 10.9881 54.9457 11.3432C54.7422 11.6982 54.6413 12.1055 54.6413 12.5633C54.6413 13.0228 54.7422 13.4284 54.9457 13.7834C55.1491 14.1385 55.4246 14.4118 55.774 14.6033C56.1233 14.7947 56.5195 14.8905 56.9589 14.8905C57.3911 14.8905 57.7836 14.7947 58.1384 14.6033C58.4931 14.4118 58.7686 14.1385 58.9667 13.7834C59.1648 13.4284 59.2638 13.0211 59.2638 12.5633C59.2638 12.1038 59.1648 11.6965 58.9667 11.3432C58.7686 10.9881 58.4913 10.7131 58.1384 10.5164C57.7836 10.3197 57.3911 10.2222 56.9589 10.2222C56.5177 10.2222 56.1233 10.3197 55.774 10.5164Z"
                fill="white"
              />
              <path
                d="M103.868 15.5171C103.342 15.2333 102.928 14.8365 102.631 14.3282C102.334 13.8183 102.184 13.2299 102.184 12.5633C102.184 11.8949 102.334 11.3049 102.631 10.7914C102.928 10.2779 103.34 9.87934 103.868 9.59563C104.396 9.31192 104.99 9.16919 105.656 9.16919C106.166 9.16919 106.632 9.26492 107.055 9.45638C107.478 9.64785 107.828 9.92808 108.105 10.2953V9.24403H109.297V15.8721H108.053V14.8783C107.777 15.2281 107.432 15.4944 107.017 15.6737C106.603 15.853 106.149 15.9435 105.658 15.9435C104.99 15.9435 104.394 15.8008 103.868 15.5171ZM104.574 10.5164C104.224 10.7131 103.947 10.9881 103.745 11.3432C103.542 11.6982 103.441 12.1055 103.441 12.5633C103.441 13.0228 103.542 13.4284 103.745 13.7834C103.949 14.1385 104.224 14.4118 104.574 14.6033C104.923 14.7947 105.319 14.8905 105.759 14.8905C106.191 14.8905 106.583 14.7947 106.938 14.6033C107.293 14.4118 107.568 14.1385 107.767 13.7834C107.965 13.4284 108.064 13.0211 108.064 12.5633C108.064 12.1038 107.965 11.6965 107.767 11.3432C107.568 10.9881 107.291 10.7131 106.938 10.5164C106.583 10.3197 106.191 10.2222 105.759 10.2222C105.317 10.2222 104.923 10.3197 104.574 10.5164Z"
                fill="white"
              />
              <path
                d="M42.8465 9.45151C43.2697 9.25134 43.783 9.15039 44.3881 9.15039V10.3148C44.3197 10.3061 44.2242 10.3027 44.1036 10.3027C43.43 10.3027 42.9005 10.4976 42.5169 10.884C42.1333 11.2721 41.9405 11.8257 41.9405 12.5428V15.8481H40.696V9.21479H41.8883V10.3288C42.1044 9.94409 42.4232 9.65168 42.8465 9.45151Z"
                fill="white"
              />
              <path
                d="M52.0952 12.9329H46.5255C46.6029 13.5177 46.8694 13.9859 47.3214 14.341C47.7752 14.6961 48.3389 14.8736 49.0123 14.8736C49.8335 14.8736 50.4925 14.6073 50.9949 14.0729L51.681 14.8492C51.3695 15.1991 50.9841 15.4671 50.5214 15.6499C50.0586 15.8344 49.5435 15.9249 48.9727 15.9249C48.247 15.9249 47.6041 15.7804 47.0423 15.4932C46.4805 15.2061 46.0465 14.8022 45.7404 14.2853C45.4342 13.7683 45.2812 13.1835 45.2812 12.5325C45.2812 11.8903 45.4307 11.3107 45.7278 10.792C46.0249 10.275 46.4355 9.8712 46.9577 9.58401C47.4799 9.29507 48.0687 9.15234 48.726 9.15234C49.3815 9.15234 49.9667 9.29681 50.4817 9.58401C50.9949 9.8712 51.3965 10.275 51.6864 10.792C51.9764 11.3089 52.1204 11.9024 52.1204 12.5691C52.1204 12.6613 52.1114 12.7832 52.0952 12.9329ZM47.2314 10.691C46.8298 11.0409 46.5939 11.5004 46.5255 12.0678H50.9301C50.8617 11.5091 50.6258 11.0513 50.2242 10.6962C49.8227 10.3412 49.3239 10.1636 48.7278 10.1636C48.1318 10.1654 47.633 10.3412 47.2314 10.691Z"
                fill="white"
              />
              <path
                d="M67.1226 15.4617C66.9408 15.6114 66.7175 15.7263 66.4492 15.8064C66.1808 15.8864 65.9053 15.9247 65.6208 15.9247C64.9293 15.9247 64.3945 15.7454 64.0145 15.3869C63.6346 15.0283 63.4437 14.5149 63.4437 13.8465V10.2035H62.2786V9.21482H63.4437V7.76318H64.688V9.21482H66.6562V10.2035H64.688V13.796C64.688 14.1546 64.7799 14.4313 64.9671 14.6228C65.1526 14.8142 65.4191 14.91 65.7631 14.91C66.143 14.91 66.4672 14.8055 66.7355 14.5967L67.1226 15.4617Z"
                fill="white"
              />
              <path
                d="M74.4477 9.88281C74.9609 10.3719 75.2184 11.0873 75.2184 12.0307V15.8495H73.9741V12.1682C73.9741 11.5259 73.8139 11.042 73.4951 10.7165C73.1764 10.3911 72.7172 10.2274 72.123 10.2274C71.4495 10.2274 70.9183 10.4172 70.5293 10.7966C70.1403 11.1761 69.9459 11.7209 69.9459 12.431V15.8495H68.7015V6.56006H69.9459V10.1526C70.2052 9.83582 70.5437 9.58866 70.9633 9.4146C71.3829 9.2388 71.851 9.15177 72.3679 9.15177C73.2412 9.15177 73.9345 9.39545 74.4477 9.88281Z"
                fill="white"
              />
              <path
                d="M86.8028 9.88338C87.316 10.3725 87.5735 11.0879 87.5735 12.0313V15.8501H86.3292V12.1688C86.3292 11.5265 86.1689 11.0426 85.8502 10.7171C85.5314 10.3916 85.0722 10.228 84.478 10.228C83.8045 10.228 83.2733 10.4177 82.8843 10.7972C82.4954 11.1766 82.3009 11.7214 82.3009 12.4316V15.8501H81.0566V9.215H82.2487V10.2158C82.499 9.87294 82.8375 9.61011 83.2661 9.42735C83.6929 9.24459 84.1791 9.15234 84.7229 9.15234C85.5963 9.15234 86.2896 9.39602 86.8028 9.88338Z"
                fill="white"
              />
              <path
                d="M96.2674 9.21507V14.9485C96.2674 16.1077 95.9703 16.9658 95.3742 17.5211C94.7782 18.0763 93.8886 18.3531 92.7055 18.3531C92.0572 18.3531 91.4396 18.2678 90.8525 18.0972C90.2655 17.9266 89.7901 17.6812 89.4281 17.3644L90.0242 16.4384C90.3429 16.7048 90.7391 16.9154 91.2091 17.0703C91.6791 17.2252 92.1653 17.3018 92.6659 17.3018C93.469 17.3018 94.0633 17.119 94.4468 16.75C94.8304 16.3827 95.0231 15.824 95.0231 15.0721V14.5464C94.7295 14.8893 94.3694 15.1452 93.9408 15.3158C93.514 15.4864 93.0494 15.5716 92.5488 15.5716C91.8916 15.5716 91.2991 15.4359 90.7679 15.1643C90.2367 14.8928 89.8207 14.5134 89.5182 14.0243C89.2156 13.5352 89.0644 12.9782 89.0644 12.3533C89.0644 11.7267 89.2156 11.1697 89.5182 10.6824C89.8207 10.195 90.2367 9.8173 90.7679 9.54926C91.2991 9.28295 91.8934 9.14893 92.5488 9.14893C93.0674 9.14893 93.5483 9.24118 93.993 9.42394C94.4378 9.60844 94.8034 9.87822 95.0879 10.2385V9.21159H96.2674V9.21507ZM93.903 14.2471C94.2613 14.0643 94.5423 13.8067 94.7457 13.4777C94.9492 13.1488 95.0501 12.7745 95.0501 12.3568C95.0501 11.7145 94.8304 11.1941 94.3892 10.7972C93.948 10.4004 93.3826 10.202 92.6929 10.202C91.9942 10.202 91.4234 10.4004 90.984 10.7972C90.5428 11.1941 90.3231 11.7128 90.3231 12.3568C90.3231 12.7745 90.424 13.147 90.6274 13.4777C90.8309 13.8067 91.1118 14.0643 91.4702 14.2471C91.8285 14.4316 92.2373 14.5221 92.6947 14.5221C93.1413 14.5221 93.5446 14.4316 93.903 14.2471Z"
                fill="white"
              />
              <path
                d="M77.4072 7.69741C77.4126 7.70263 77.4162 7.70785 77.4216 7.71134C77.5819 7.86102 77.7818 7.93587 78.0232 7.93587C78.2646 7.93587 78.4663 7.85928 78.6248 7.70437C78.7852 7.54946 78.8644 7.35974 78.8644 7.13521C78.8644 6.91763 78.7852 6.73661 78.6248 6.59041C78.4645 6.4442 78.2646 6.37109 78.0232 6.37109C77.7818 6.37109 77.5801 6.44768 77.4216 6.60259C77.4162 6.60781 77.4126 6.61303 77.4072 6.61651V7.69741Z"
                fill="white"
              />
              <path
                d="M77.4053 9.23723H77.3999V15.8497H78.6446V9.2146H77.4053V9.23723Z"
                fill="white"
              />
              <path
                d="M111.354 7.67934C111.359 7.68457 111.363 7.68979 111.368 7.69327C111.528 7.84296 111.728 7.9178 111.97 7.9178C112.211 7.9178 112.413 7.84122 112.571 7.68631C112.732 7.5314 112.811 7.34167 112.811 7.11714C112.811 6.89957 112.732 6.71855 112.571 6.57234C112.411 6.42613 112.211 6.35303 111.97 6.35303C111.728 6.35303 111.527 6.42961 111.368 6.58452C111.363 6.58974 111.359 6.59497 111.354 6.59845V7.67934Z"
                fill="white"
              />
              <path
                d="M111.353 9.21992H111.347V15.8324H112.59V9.19556H111.353V9.21992Z"
                fill="white"
              />
              <path
                d="M98.8335 15.6862C98.8389 15.6914 98.8425 15.6966 98.8479 15.7001C99.0082 15.8498 99.2082 15.9246 99.4495 15.9246C99.6909 15.9246 99.8927 15.8481 100.051 15.6931C100.211 15.5382 100.291 15.3485 100.291 15.124C100.291 14.9064 100.211 14.7254 100.051 14.5792C99.8909 14.433 99.6909 14.3599 99.4495 14.3599C99.2082 14.3599 99.0064 14.4364 98.8479 14.5914C98.8425 14.5966 98.8389 14.6018 98.8335 14.6053V15.6862Z"
                fill="white"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_1400_2127"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(22.6492 10.8453) rotate(180) scale(16.8075 17.8728)"
                >
                  <stop stopColor="#DBFBF1" />
                  <stop offset="1" stopColor="#F1D8FF" />
                </radialGradient>
              </defs>
            </svg>

            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (!showRatings) {
                  setShowRatings(true);
                } else {
                  setShowRatings(false);
                  breakCompleted({
                    contentUrl: videoFile.url,
                    completed: false,
                    rating: 0,
                    lang: (i18n.language as AVAILABLE_LANGUAGES) ?? 'en',
                  });
                }
              }}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.916476 0.305288C1.10621 0.117817 1.36352 0.0125017 1.63181 0.0125017C1.9001 0.0125017 2.1574 0.117817 2.34714 0.305288L7.70252 5.59829L13.0579 0.305288C13.1512 0.209778 13.2629 0.133596 13.3863 0.0811867C13.5098 0.0287777 13.6425 0.00119157 13.7769 3.77567e-05C13.9112 -0.00111606 14.0445 0.0241857 14.1688 0.0744666C14.2931 0.124747 14.4061 0.199 14.5011 0.292893C14.5961 0.386786 14.6712 0.498438 14.7221 0.621334C14.773 0.74423 14.7986 0.87591 14.7974 1.00869C14.7962 1.14147 14.7683 1.27269 14.7153 1.39469C14.6623 1.5167 14.5852 1.62704 14.4886 1.71929L9.13319 7.01229L14.4886 12.3053C14.6729 12.4939 14.7749 12.7465 14.7725 13.0087C14.7702 13.2709 14.6638 13.5217 14.4762 13.7071C14.2886 13.8925 14.0349 13.9977 13.7696 14C13.5043 14.0022 13.2487 13.9014 13.0579 13.7193L7.70252 8.42629L2.34714 13.7193C2.15632 13.9014 1.90074 14.0022 1.63545 14C1.37016 13.9977 1.11639 13.8925 0.928801 13.7071C0.741208 13.5217 0.6348 13.2709 0.632495 13.0087C0.630189 12.7465 0.732171 12.4939 0.916476 12.3053L6.27186 7.01229L0.916476 1.71929C0.726796 1.53176 0.620239 1.27745 0.620239 1.01229C0.620239 0.747124 0.726796 0.492816 0.916476 0.305288Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <h1
              style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 700,
                color: '#000',
                marginTop: 0,
                marginBottom: '8px',
              }}
            >
              {translations[language].break_time}
            </h1>
            <p
              style={{
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 500,
                color: '#000',
                marginTop: 0,
              }}
            >
              {videoFile?.name}
            </p>
            <div style={{ position: 'relative', width: '100%' }}>
              <BreaksPlayer
                language={language}
                showRatings={showRatings}
                url={videoFile?.url}
                openModal={open}
                completeBreak={(event) => {
                  breakCompleted(event);
                  setShowRatings(false);
                }}
                setShowRatings={() => {
                  setShowRatings(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreaksModal;
