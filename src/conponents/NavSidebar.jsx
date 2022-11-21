/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import React, { useState } from "react";
import { FaRegSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { VscNewFolder } from 'react-icons/vsc';
import { GrDocumentText } from 'react-icons/gr';
import { FiUserCheck } from 'react-icons/fi';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FcStatistics } from 'react-icons/fc';

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useLocation, useNavigate } from "react-router-dom";

export const NavSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* 햄버거메뉴 숨김 */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
      <div >
        <button
          className="btn-menu"
          onClick={()=> setIsSidebarOpen(true)}
          hidden
          type="button"
        >
          <GiHamburgerMenu  />
        </button>
      </div>

      {/* 사이드바 상단메뉴 */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-80 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-l-2  lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
      <div className="flex items-center justify-center mt-10 text-center py-14">
        <img src="logo.png" alt="Logo" />
      </div>

      {/* 네비게이션 */}
      <Navigation
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {
          navigate(itemId);
        }}
        items={[
          {
            title: "문서 조회",
            itemId: "/loan_list",
            elemBefore: () => <BsSearch />,
            subNav: [
              {
                title: "채권/심사",
                itemId: "/loan_list",
              },
              {
                title: "차세/범칙금",
                itemId: "/loan_view",
              },
              {
                title: "차세/범칙금 계약번호",
                itemId: "/tax_list",
              },
            ]
          },
          {
            title: "문서 등록",
            itemId: "/loan_reg",
            elemBefore: () => <VscNewFolder />,
            subNav: [
              {
                title: "채권/심사 등록",
                itemId: "/loan_reg"
              },
            ]
          },
          {
            title: "일반 문서",
            itemId: "/normal_list",
            elemBefore: () => <GrDocumentText />,
            subNav: [
              {
                title: "문서 조회",
                itemId: "/normal_list"
              },
              {
                title: "이미지파일 조회",
                itemId: "/normal_view"
              },
            ]
          },
          {
            title: "통계자료",
            itemId: "/daily_stat",
            elemBefore: () => <FcStatistics />,
            subNav: [
              {
                title: "일자별 현황",
                itemId: "/daily_stat"
              },
            ]
          },
          {
            title: "관리",
            itemId: "/user_grant",
            elemBefore: () => <FaRegSun />,
            subNav: [
              {
                title: "사용자/권한관리",
                itemId: "/user_grant"
              },
              {
                title: "문서분류코드",
                itemId: "/doc_gmt"
              },
              {
                title: "문서코드",
                itemId: "/doc_item"
              },
              {
                title: "업무구분코드",
                itemId: "/biz_cd"
              },
              {
                title: "업무별 서식정보",
                itemId: "/biz_item"
              },
            ]
          },
        ]}
      />

        <div className="absolute bottom-14 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "사용자",
                itemId: "/",
                elemBefore: () => <FiUserCheck />
                
              }
            ]}
            onSelect={({ itemId }) => {
                navigate(itemId);
            }}
          />
        </div>

        <div className="absolute bottom-0 w-full my-8">
        <Navigation
          activeItemId={location.pathname}
          items={[
            {
              title: "SYSTEM DOWNLOAD",
              itemId: "/",
              elemBefore: () => <AiOutlineCloudDownload />
              
            }
          ]}
          onSelect={({ itemId }) => {
              navigate(itemId);
          }}
        />
        </div>

      </div>
    </React.Fragment>
  );
};
