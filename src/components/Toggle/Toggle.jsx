import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import "./toggle.css";
function Toggle() {
  return (
    <>
      <input type="checkbox" id="toggle" hidden></input>

      <label for="toggle" class="toggleSwitch">
        <span class="toggleButton"></span>
      </label>
    </>
  );
}

export default Toggle;
