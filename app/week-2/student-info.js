import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <p>My name is Gurjagjot Singh Waraich</p>
      <p>
        my github repository link is:
        <Link href="https://github.com/JotWaraich/cprg306-assignments">
          https://github.com/JotWaraich/cprg306-assignments
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
