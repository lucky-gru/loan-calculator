import * as React from 'react';

const AddIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 29.0001C22.732 29.0001 29 22.732 29 15.0001C29 7.26807 22.732 1.00006 15 1.00006C7.26801 1.00006 1 7.26807 1 15.0001C1 22.732 7.26801 29.0001 15 29.0001Z"
      stroke="#0962EA"
      strokeMiterlimit="10"
    />
    <path d="M15 6.60006V23.4001" stroke="#0962EA" strokeMiterlimit="10" />
    <path d="M23.4 15.0001H6.6" stroke="#0962EA" strokeMiterlimit="10" />
  </svg>
);

export default AddIcon;
