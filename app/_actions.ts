"use server";

export const readWindStats = async () => {
  const response = await fetch(
    "https://www.ndbc.noaa.gov/view_text_file.php?filename=tplm2c1990.txt.gz&dir=data/historical/cwind/"
  );
  const data = await response.text();
};
