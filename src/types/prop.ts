type RoundedBadgeEmProps = {
  as: "em";
};
type RoundedBadgeButtonProps = {
  as: "button";
  isActivated: boolean;
};

type RoundedBadgeProps = RoundedBadgeEmProps | RoundedBadgeButtonProps;

export type { RoundedBadgeEmProps, RoundedBadgeButtonProps, RoundedBadgeProps };
