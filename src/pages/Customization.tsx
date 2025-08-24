import React, { useState } from "react";

export default function Customization() {
  const [primaryColor, setPrimaryColor] = useState("#6828EE");
  const [secondaryColor, setSecondaryColor] = useState("#F3F4F6");
  const [accentColor, setAccentColor] = useState("#10B981");
  const [logo, setLogo] = useState<File | null>(null);
  const [companyName, setCompanyName] = useState("Your Company Name");
  const [theme, setTheme] = useState("light");

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const saveCustomization = () => {
    // Here you would typically make an API call to save the customization
    console.log("Saving customization:", {
      primaryColor,
      secondaryColor,
      accentColor,
      logo,
      companyName,
      theme,
    });
    alert("Customization saved successfully!");
  };

  const resetToDefault = () => {
    setPrimaryColor("#6828EE");
    setSecondaryColor("#F3F4F6");
    setAccentColor("#10B981");
    setLogo(null);
    setCompanyName("Your Company Name");
    setTheme("light");
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customization</h1>
        <p className="text-gray-600">
          Personalize your dashboard to match your brand identity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Brand Identity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Brand Identity
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {logo ? (
                      <img
                        src={URL.createObjectURL(logo)}
                        alt="Logo preview"
                        className="w-16 h-16 object-contain"
                      />
                    ) : (
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Recommended size: 200x200px, Max size: 2MB
                </p>
              </div>
            </div>
          </div>

          {/* Color Scheme */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Color Scheme
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accent Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Theme Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme Mode
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="light"
                      checked={theme === "light"}
                      onChange={(e) => setTheme(e.target.value)}
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    Light
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="dark"
                      checked={theme === "dark"}
                      onChange={(e) => setTheme(e.target.value)}
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    Dark
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="auto"
                      checked={theme === "auto"}
                      onChange={(e) => setTheme(e.target.value)}
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    Auto
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview and Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Preview
            </h3>
            <div className="space-y-4">
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: secondaryColor }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {logo && (
                    <img
                      src={URL.createObjectURL(logo)}
                      alt="Logo"
                      className="w-8 h-8 object-contain"
                    />
                  )}
                  <span className="font-semibold text-gray-900">
                    {companyName}
                  </span>
                </div>
                <div className="space-y-2">
                  <div
                    className="h-3 rounded"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  <div className="h-3 rounded bg-gray-300"></div>
                  <div
                    className="h-3 rounded"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                </div>
              </div>

              <div className="text-center">
                <button
                  className="px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  Primary Button
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={saveCustomization}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={resetToDefault}
                className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Reset to Default
              </button>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Customization Tips
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use consistent colors across your brand</li>
                    <li>Ensure good contrast for accessibility</li>
                    <li>Test your theme in different lighting conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
