package com.reactnativewannads;

import android.app.Activity;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.wannads.sdk.WannadsSdk;

@ReactModule(name = WannadsModule.NAME)
public class WannadsModule extends ReactContextBaseJavaModule {
    public static final String NAME = "Wannads";

    public WannadsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void showOfferWall(String apiKey, String apiSecret, String userId) {
      Activity activity = getCurrentActivity();
      WannadsSdk.getInstance().init(activity.getApplicationContext(), apiKey, apiSecret, userId);
      WannadsSdk.getInstance().showOfferWall();
    }

    public static native int nativeMultiply(int a, int b);
}
