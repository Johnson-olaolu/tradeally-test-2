import React from "react";

const TopCards = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-white rounded-2xl p-5 max-w-[274px]  h-[210px] flex flex-col">
        <div className=" flex items-center justify-between pb-6 border-b border-[#E8EDF1] shrink-0">
          <div className=" flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#F3F7FD] ">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.8529 6.09774C16.7997 5.94356 16.7029 5.80814 16.5742 5.70789C16.4455 5.60765 16.2905 5.54689 16.128 5.53299L11.3318 4.83337L9.1824 0.475497C9.11338 0.332984 9.00561 0.212796 8.87144 0.128699C8.73727 0.0446028 8.58212 0 8.42378 0C8.26543 0 8.11029 0.0446028 7.97612 0.128699C7.84195 0.212796 7.73418 0.332984 7.66515 0.475497L5.51572 4.82494L0.719537 5.53299C0.563532 5.55516 0.416867 5.62062 0.296183 5.72193C0.1755 5.82325 0.0856315 5.95636 0.0367762 6.10617C-0.00794468 6.25256 -0.0119578 6.40837 0.0251674 6.55687C0.0622926 6.70537 0.139155 6.84096 0.247505 6.94908L3.72874 10.3207L2.88583 15.1085C2.85574 15.2665 2.87149 15.4299 2.93124 15.5792C2.99098 15.7286 3.09222 15.8577 3.22299 15.9514C3.35046 16.0425 3.5008 16.0963 3.65714 16.1068C3.81347 16.1172 3.96962 16.0838 4.10805 16.0104L8.42378 13.7598L12.7226 16.0188C12.8409 16.0856 12.9746 16.1204 13.1104 16.12C13.2889 16.1206 13.4631 16.0646 13.6077 15.9598C13.7385 15.8662 13.8397 15.737 13.8995 15.5877C13.9592 15.4383 13.975 15.275 13.9449 15.1169L13.102 10.3292L16.5832 6.95751C16.7049 6.85441 16.7948 6.71889 16.8426 6.56669C16.8903 6.4145 16.8939 6.25189 16.8529 6.09774ZM11.669 9.4694C11.5701 9.56501 11.4962 9.68336 11.4536 9.81413C11.411 9.94489 11.401 10.0841 11.4246 10.2196L12.0315 13.7514L8.86209 12.0656C8.74014 12.0006 8.60409 11.9667 8.46592 11.9667C8.32776 11.9667 8.19171 12.0006 8.06975 12.0656L4.90039 13.7514L5.50729 10.2196C5.53084 10.0841 5.52088 9.94489 5.47827 9.81413C5.43566 9.68336 5.3617 9.56501 5.26285 9.4694L2.7341 6.94065L6.28277 6.42648C6.41933 6.40748 6.54913 6.35528 6.66082 6.27446C6.77251 6.19363 6.86266 6.08664 6.92339 5.96287L8.42378 2.75137L10.0085 5.9713C10.0692 6.09507 10.1593 6.20206 10.271 6.28289C10.3827 6.36371 10.5125 6.41591 10.6491 6.4349L14.1977 6.94908L11.669 9.4694Z"
                  fill="#8D98A9"
                />
              </svg>
            </div>
            <span className=" text-[#8C97A8]">Task Completed</span>
          </div>
          <span className=" text-[#1E1E1E] font-bold text-2xl">08</span>
        </div>
        <div className="pt-7">
          <div className=" flex-grow  flex justify-between items-end">
            <svg width="124" height="68" viewBox="0 0 124 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1_62)">
                <path
                  d="M9 45.7573C9.43233 45.9655 10.2525 46.3237 15.2624 41.7925C21.5248 36.1285 27.2178 32.1638 33.4802 37.2613C39.7426 42.3589 43.7277 54.8196 51.698 51.4213C59.6683 48.0229 62.5149 22.535 72.1931 19.1367C81.8713 15.7383 88.1337 35.5622 94.9653 24.8006C101.797 14.0391 109.198 0.445683 114.322 2.14487C118.421 3.50422 122.482 9.13046 124 11.7737"
                  stroke="#5051F9"
                  stroke-width="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_62"
                  x="0.56604"
                  y="-0.00146484"
                  width="132.301"
                  height="68.0015"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="7" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.313725 0 0 0 0 0.317647 0 0 0 0 0.976471 0 0 0 0.4 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_62" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_62" result="shape" />
                </filter>
              </defs>
            </svg>
            <p className=" transform flex-grow text-right text-[#768396] font-medium">
              <span className="text-[#299702]">10+</span> more
              <br />
              from last week
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 max-w-[274px]  h-[210px] flex flex-col">
        <div className=" flex items-center justify-between pb-6 border-b border-[#E8EDF1] shrink-0">
          <div className=" flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#F3F7FD] ">
              <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.8 9.6H4C3.78783 9.6 3.58434 9.68429 3.43431 9.83432C3.28429 9.98434 3.2 10.1878 3.2 10.4C3.2 10.6122 3.28429 10.8157 3.43431 10.9657C3.58434 11.1157 3.78783 11.2 4 11.2H8.8C9.01217 11.2 9.21566 11.1157 9.36568 10.9657C9.51571 10.8157 9.6 10.6122 9.6 10.4C9.6 10.1878 9.51571 9.98434 9.36568 9.83432C9.21566 9.68429 9.01217 9.6 8.8 9.6ZM8.8 6.4H5.6C5.38783 6.4 5.18434 6.48429 5.03431 6.63432C4.88429 6.78434 4.8 6.98783 4.8 7.2C4.8 7.41217 4.88429 7.61566 5.03431 7.76569C5.18434 7.91571 5.38783 8 5.6 8H8.8C9.01217 8 9.21566 7.91571 9.36568 7.76569C9.51571 7.61566 9.6 7.41217 9.6 7.2C9.6 6.98783 9.51571 6.78434 9.36568 6.63432C9.21566 6.48429 9.01217 6.4 8.8 6.4ZM10.4 1.6H9.456C9.29095 1.13316 8.98554 0.728799 8.58165 0.442351C8.17776 0.155903 7.69516 0.00139161 7.2 0H5.6C5.10484 0.00139161 4.62224 0.155903 4.21835 0.442351C3.81446 0.728799 3.50905 1.13316 3.344 1.6H2.4C1.76348 1.6 1.15303 1.85286 0.702944 2.30294C0.252856 2.75303 0 3.36348 0 4V13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7471 1.76348 16 2.4 16H10.4C11.0365 16 11.647 15.7471 12.0971 15.2971C12.5471 14.847 12.8 14.2365 12.8 13.6V4C12.8 3.36348 12.5471 2.75303 12.0971 2.30294C11.647 1.85286 11.0365 1.6 10.4 1.6ZM4.8 2.4C4.8 2.18783 4.88429 1.98434 5.03431 1.83431C5.18434 1.68429 5.38783 1.6 5.6 1.6H7.2C7.41217 1.6 7.61566 1.68429 7.76568 1.83431C7.91571 1.98434 8 2.18783 8 2.4V3.2H4.8V2.4ZM11.2 13.6C11.2 13.8122 11.1157 14.0157 10.9657 14.1657C10.8157 14.3157 10.6122 14.4 10.4 14.4H2.4C2.18783 14.4 1.98434 14.3157 1.83431 14.1657C1.68429 14.0157 1.6 13.8122 1.6 13.6V4C1.6 3.78783 1.68429 3.58434 1.83431 3.43431C1.98434 3.28429 2.18783 3.2 2.4 3.2H3.2V4C3.2 4.21217 3.28429 4.41566 3.43431 4.56569C3.58434 4.71571 3.78783 4.8 4 4.8H8.8C9.01217 4.8 9.21566 4.71571 9.36568 4.56569C9.51571 4.41566 9.6 4.21217 9.6 4V3.2H10.4C10.6122 3.2 10.8157 3.28429 10.9657 3.43431C11.1157 3.58434 11.2 3.78783 11.2 4V13.6Z"
                  fill="#8D98A9"
                />
              </svg>
            </div>
            <span className=" text-[#8C97A8]">New Task</span>
          </div>
          <span className=" text-[#1E1E1E] font-bold text-2xl">10</span>
        </div>
        <div className="pt-7">
          <div className=" flex-grow  flex justify-between items-end">
            <svg width="124" height="68" viewBox="0 0 124 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1_73)">
                <path
                  d="M9 45.7573C9.43233 45.9655 10.2525 46.3237 15.2624 41.7925C21.5248 36.1285 27.2178 32.1638 33.4802 37.2613C39.7426 42.3589 43.7277 54.8196 51.698 51.4213C59.6683 48.0229 62.5149 22.535 72.1931 19.1367C81.8713 15.7383 88.1337 35.5622 94.9653 24.8006C101.797 14.0391 109.198 0.445683 114.322 2.14487C118.421 3.50422 122.482 9.13046 124 11.7737"
                  stroke="#1EA7FF"
                  stroke-width="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_73"
                  x="0.56604"
                  y="-0.00146484"
                  width="132.301"
                  height="68.0015"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="7" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.654902 0 0 0 0 1 0 0 0 0.4 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_73" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_73" result="shape" />
                </filter>
              </defs>
            </svg>

            <p className=" transform flex-grow text-right text-[#768396] font-medium">
              <span className="text-[#299702]">10+</span> more
              <br />
              from last week
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 max-w-[274px]  h-[210px] flex flex-col">
        <div className=" flex items-center justify-between pb-6 border-b border-[#E8EDF1] shrink-0">
          <div className=" flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#F3F7FD] ">
              <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.8 9.6H4C3.78783 9.6 3.58434 9.68429 3.43431 9.83432C3.28429 9.98434 3.2 10.1878 3.2 10.4C3.2 10.6122 3.28429 10.8157 3.43431 10.9657C3.58434 11.1157 3.78783 11.2 4 11.2H8.8C9.01217 11.2 9.21566 11.1157 9.36568 10.9657C9.51571 10.8157 9.6 10.6122 9.6 10.4C9.6 10.1878 9.51571 9.98434 9.36568 9.83432C9.21566 9.68429 9.01217 9.6 8.8 9.6ZM8.8 6.4H5.6C5.38783 6.4 5.18434 6.48429 5.03431 6.63432C4.88429 6.78434 4.8 6.98783 4.8 7.2C4.8 7.41217 4.88429 7.61566 5.03431 7.76569C5.18434 7.91571 5.38783 8 5.6 8H8.8C9.01217 8 9.21566 7.91571 9.36568 7.76569C9.51571 7.61566 9.6 7.41217 9.6 7.2C9.6 6.98783 9.51571 6.78434 9.36568 6.63432C9.21566 6.48429 9.01217 6.4 8.8 6.4ZM10.4 1.6H9.456C9.29095 1.13316 8.98554 0.728799 8.58165 0.442351C8.17776 0.155903 7.69516 0.00139161 7.2 0H5.6C5.10484 0.00139161 4.62224 0.155903 4.21835 0.442351C3.81446 0.728799 3.50905 1.13316 3.344 1.6H2.4C1.76348 1.6 1.15303 1.85286 0.702944 2.30294C0.252856 2.75303 0 3.36348 0 4V13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7471 1.76348 16 2.4 16H10.4C11.0365 16 11.647 15.7471 12.0971 15.2971C12.5471 14.847 12.8 14.2365 12.8 13.6V4C12.8 3.36348 12.5471 2.75303 12.0971 2.30294C11.647 1.85286 11.0365 1.6 10.4 1.6ZM4.8 2.4C4.8 2.18783 4.88429 1.98434 5.03431 1.83431C5.18434 1.68429 5.38783 1.6 5.6 1.6H7.2C7.41217 1.6 7.61566 1.68429 7.76568 1.83431C7.91571 1.98434 8 2.18783 8 2.4V3.2H4.8V2.4ZM11.2 13.6C11.2 13.8122 11.1157 14.0157 10.9657 14.1657C10.8157 14.3157 10.6122 14.4 10.4 14.4H2.4C2.18783 14.4 1.98434 14.3157 1.83431 14.1657C1.68429 14.0157 1.6 13.8122 1.6 13.6V4C1.6 3.78783 1.68429 3.58434 1.83431 3.43431C1.98434 3.28429 2.18783 3.2 2.4 3.2H3.2V4C3.2 4.21217 3.28429 4.41566 3.43431 4.56569C3.58434 4.71571 3.78783 4.8 4 4.8H8.8C9.01217 4.8 9.21566 4.71571 9.36568 4.56569C9.51571 4.41566 9.6 4.21217 9.6 4V3.2H10.4C10.6122 3.2 10.8157 3.28429 10.9657 3.43431C11.1157 3.58434 11.2 3.78783 11.2 4V13.6Z"
                  fill="#8D98A9"
                />
              </svg>
            </div>
            <span className=" text-[#8C97A8]">Project Done</span>
          </div>
          <span className=" text-[#1E1E1E] font-bold text-2xl">10</span>
        </div>
        <div className="pt-7">
          <div className=" flex-grow  flex justify-between items-end">
            <svg width="124" height="68" viewBox="0 0 124 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1_84)">
                <path
                  d="M9 45.7573C9.43233 45.9655 10.2525 46.3237 15.2624 41.7925C21.5248 36.1285 27.2178 32.1638 33.4802 37.2613C39.7426 42.3589 43.7277 54.8196 51.698 51.4213C59.6683 48.0229 62.5149 22.535 72.1931 19.1367C81.8713 15.7383 88.1337 35.5622 94.9653 24.8006C101.797 14.0391 109.198 0.445683 114.322 2.14487C118.421 3.50422 122.482 9.13046 124 11.7737"
                  stroke="#FF614C"
                  stroke-width="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_84"
                  x="0.566038"
                  y="-0.00146484"
                  width="132.301"
                  height="68.0015"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="7" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.380392 0 0 0 0 0.298039 0 0 0 0.4 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_84" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_84" result="shape" />
                </filter>
              </defs>
            </svg>

            <p className=" transform flex-grow text-right text-[#768396] font-medium">
              <span className="text-[#299702]">08+</span> more
              <br />
              from last week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
