function AS_Form_be28be4ecdd140c1a1f5e7f0dbc967f6(eventobject) {
    function TRANSFORM_ACTION_NEW____d4fbf04bb2e44266a44a35ec49491be7_Callback() {
        frmLogin.show();
    }
    var trans100 = kony.ui.makeAffineTransform();
    trans100.translate(0, 0);
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
        "animationEnd": TRANSFORM_ACTION_NEW____d4fbf04bb2e44266a44a35ec49491be7_Callback
    });
}