import React, { useEffect, useState } from "react";
import useCustomTable from "../../customHooks/useCustomTable";
import LoadingComp from "../../components/LoadingComp";
import CustomContainer from "../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../components/Notification";

import { getAllAcademicGradingAction } from "./AcademicGradingActions";
import MobileBody from "../../components/MobileBody";
import { GET_ALL_ACADEMIC_GRADING_RESET } from "./AcademicGradingConstants";
import MobileTopSelectContainer from "../../components/MobileTopSelectContainer";
import AcademicGradingListCollapse from "./AcademicGradingListCollapse";

const AcademicGrading = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const dispatch = useDispatch();

  const { academicGrading, loading, error } = useSelector(
    (state) => state.academicGrading
  );

  if (error) {
    setNotify({
      isOpen: true,
      message: error,
      type: "error",
    });
    dispatch({ type: GET_ALL_ACADEMIC_GRADING_RESET });
  }

  useEffect(() => {
    if (!academicGrading) {
      dispatch(getAllAcademicGradingAction());
    }
  }, [dispatch, academicGrading]);

  return (
    <>
      <CustomContainer>
        <MobileTopSelectContainer>
          <h3 style={{ margin: "0", textAlign: "center" }}>Academic Grading</h3>
        </MobileTopSelectContainer>
        {loading ? (
          <LoadingComp />
        ) : (
          <>
            <MobileBody>
              {academicGrading &&
                academicGrading?.dbModelLst.map((item) => (
                  <AcademicGradingListCollapse item={item} key={item.$id} />
                ))}
            </MobileBody>
          </>
        )}
      </CustomContainer>

      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default AcademicGrading;
