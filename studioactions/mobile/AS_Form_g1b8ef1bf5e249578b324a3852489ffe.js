function AS_Form_g1b8ef1bf5e249578b324a3852489ffe(eventobject) {
    function TRANSFORM_ACTION_NEW____cb92929fd5b74c908de4aa9dc4735590_Callback() {
        frmDashboard.show();
    }
    var trans100 = kony.ui.makeAffineTransform();
    frmSplash.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": trans100
        }
    }), {
        "delay": 0.7,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": TRANSFORM_ACTION_NEW____cb92929fd5b74c908de4aa9dc4735590_Callback
    });
}