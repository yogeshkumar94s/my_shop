import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import CardTitle from "./CardTitle";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <CardTitle label={headerLabel} />
      </CardHeader>
      {children}
    </Card>
  );
};

export default CardWrapper;
