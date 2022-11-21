import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoanList from "./loan_list";
import LoanView from "./loan_view";
import TaxList from "./tax_list";
import LoanReg from "./loan_reg";
import NormalList from "./normal_list";
import NormalView from "./normal_view";
import DailyStat from "./daily_stat";
import UserGrant from "./user_grant";
import DocGmt from "./doc_gmt";
import DocItem from "./doc_item";
import BizCd from "./biz_cd";
import BizItem from "./biz_item";
import HomePage from "./home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loan_list" element={<LoanList />}/>
        <Route path="/loan_view" element={<LoanView />}/>
        <Route path="/tax_list" element={<TaxList />}/>
        <Route path="/loan_reg" element={<LoanReg />}/>
        <Route path="/normal_list" element={<NormalList />}/>
        <Route path="/normal_view" element={<NormalView />} />
        <Route path="/daily_stat" element={<DailyStat />} />
        <Route path="/user_grant" element={<UserGrant />} />
        <Route path="/doc_gmt" element={<DocGmt />} />
        <Route path="/doc_item" element={<DocItem />} />
        <Route path="/biz_cd" element={<BizCd />} />
        <Route path="/biz_item" element={<BizItem />} />
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
