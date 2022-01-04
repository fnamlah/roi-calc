"use strict";

document.querySelector(".btn--calc").addEventListener("click", function () {
  const initVal = Number(document.querySelector(".initial--value").value);
  const retVal = Number(document.querySelector(".return--value").value);
  const investYrs = Number(document.querySelector(".years-value").value);

  const InvestGain = retVal - initVal;
  const roiCalc = ((retVal - initVal) / initVal) * 100;

  const roiForAnnual = roiCalc / 100;

  const annROi = ((1 + roiForAnnual) ** (1 / investYrs) - 1) * 100;

  // Results Table
  //   Investment Gain

  const g = (document.querySelector(".gain--value").textContent =
    InvestGain.toFixed(2));

  //   ROI Calc
  const r = Number(
    (document.querySelector(".roi--value").textContent = roiCalc.toFixed(2))
  );
  // Annual ROI
  const aR = Number(
    (document.querySelector(".an-roi--value").textContent = annROi.toFixed(2))
  );
  //   Investment Length
  const y = (document.querySelector(".years--value").textContent = investYrs);

  // Icons
  const pOne = (document.querySelector(".input--percent-1").textContent = "%");
  const pTwo = (document.querySelector(".input--percent-2").textContent = "%");
  const dolla = (document.querySelector(".dolla--sign").textContent = "$");
  const yrs = (document.querySelector(".input--years").textContent = "years");

  console.log(typeof g, aR, r, y, pOne, pTwo, dolla, yrs);
  console.log(initVal, retVal, investYrs, roiCalc, roiForAnnual, annROi, aR);
});
