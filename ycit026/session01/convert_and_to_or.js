// !(!bcondition1) || !(bcondition2))

const boolean1 = true;
const boolean2 = false;

if (boolean1 && boolean2) {
    console.log('Solution1 True');
}

if (!(!boolean1 || !boolean2)) {
    console.log('Solution2 True');
}

