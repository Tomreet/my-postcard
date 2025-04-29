// utils/dateUtils.js
export const calculateDaysRemaining = (dischargeDate) => {
  const now = new Date();
  const target = new Date(dischargeDate);
  const diff = target - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};