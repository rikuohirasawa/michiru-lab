"use strict";
const express = require('express');
express()
    .listen(8000, () => {
    console.log('server launched on port 8000');
});
