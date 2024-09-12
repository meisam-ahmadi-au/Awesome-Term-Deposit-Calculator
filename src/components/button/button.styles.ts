export const buttonStyle = {
  enabled: "bg-blue-500 text-white hover:bg-blue-600",
  disabled: "bg-gray-400 text-gray-200 cursor-not-allowed",
};

export const styles = {
  wrapper: (className: string) => `mb-4 ${className}`,

  button: (disabled?: boolean) =>
    `w-full px-4 py-2 rounded-md focus:outline-none ${
      disabled ? buttonStyle.disabled : buttonStyle.enabled
    }`,
};
