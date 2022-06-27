package io.ionic.studentmis;

import android.content.Intent;
import android.content.IntentSender;
import android.os.Bundle;
import android.widget.Toast;
import com.getcapacitor.BridgeActivity;
import com.google.android.play.core.appupdate.AppUpdateInfo;
import com.google.android.play.core.appupdate.AppUpdateManager;
import com.google.android.play.core.appupdate.AppUpdateManagerFactory;
import com.google.android.play.core.install.model.AppUpdateType;
import com.google.android.play.core.install.model.UpdateAvailability;
import com.google.android.play.core.tasks.Task;

public class MainActivity extends BridgeActivity {

    private AppUpdateManager appUpdateManager;
    private static final int IMMEDIATE_APP_UPDATE_REQ_CODE = 124;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(com.getcapacitor.android.R.layout.bridge_layout_main);
        appUpdateManager = AppUpdateManagerFactory.create(getApplicationContext());
        // appUpdateManager = AppUpdateManagerFactory.create(this);
        checkUpdate();
    }

    @Override
    public void onResume(){
        super.onResume();
        checkUpdate();
    }

    private void checkUpdate() {

        Task<AppUpdateInfo> appUpdateInfoTask = appUpdateManager.getAppUpdateInfo();

        appUpdateInfoTask.addOnSuccessListener(appUpdateInfo -> {
            if (appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE
                    && appUpdateInfo.isUpdateTypeAllowed(AppUpdateType.IMMEDIATE)) {
                startUpdateFlow(appUpdateInfo);
            } else if  (appUpdateInfo.updateAvailability() == UpdateAvailability.DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS){
                startUpdateFlow(appUpdateInfo);
            }
        });
    }

    private void startUpdateFlow(AppUpdateInfo appUpdateInfo) {
        try {
            appUpdateManager.startUpdateFlowForResult(appUpdateInfo, AppUpdateType.IMMEDIATE, this, IMMEDIATE_APP_UPDATE_REQ_CODE);
        } catch (IntentSender.SendIntentException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == IMMEDIATE_APP_UPDATE_REQ_CODE) {
            if (resultCode == RESULT_CANCELED) {
                Toast.makeText(getApplicationContext(), "Update canceled by user! Result Code: " + resultCode, Toast.LENGTH_LONG).show();
            } else if (resultCode == RESULT_OK) {
                Toast.makeText(getApplicationContext(), "Update success! Result Code: " + resultCode, Toast.LENGTH_LONG).show();
            } else {
                Toast.makeText(getApplicationContext(), "Update Failed! Result Code: " + resultCode, Toast.LENGTH_LONG).show();
                checkUpdate();
            }
        }
    }

//     @Override
//     public void onStart(){
//         super.onStart();
//         UpdateApp();
//     }

//     public void UpdateApp(){
//         AppUpdateManager appUpdateManager = AppUpdateManagerFactory.create(this);
//         Task<AppUpdateInfo> appUpdateInfoTask = appUpdateManager.getAppUpdateInfo();
//         // Checks that the platform will allow the specified type of update.
//         appUpdateInfoTask.addOnSuccessListener(result -> {

//             if (result.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE) {
// //                requestUpdate(result);
//                 android.view.ContextThemeWrapper ctw = new android.view.ContextThemeWrapper(this,R.style.Theme_AlertDialog);
//                 final android.app.AlertDialog.Builder alertDialogBuilder = new android.app.AlertDialog.Builder(ctw);
//                 alertDialogBuilder.setTitle("Update NTT Netmagic");
//                 alertDialogBuilder.setCancelable(false);
//                 alertDialogBuilder.setIcon(R.drawable.icons_google_play);
//                 alertDialogBuilder.setMessage("Fitness Trainer recommends that you update to the latest version for a seamless & enhanced performance of the app.");
//                 alertDialogBuilder.setPositiveButton("Update", new DialogInterface.OnClickListener() {
//                     public void onClick(DialogInterface dialog, int id) {
//                         try{
//                             startActivity(new Intent("android.intent.action.VIEW", Uri.parse("market://details?id="+getPackageName())));
//                         }
//                         catch (ActivityNotFoundException e){
//                             startActivity(new Intent("android.intent.action.VIEW", Uri.parse("https://play.google.com/store/apps/details?id="+getPackageName())));
//                         }
//                     }
//                 });
//                 alertDialogBuilder.setNegativeButton("No Thanks",new DialogInterface.OnClickListener() {
//                     public void onClick(DialogInterface dialog, int id) {

//                     }
//                 });
//                 alertDialogBuilder.show();

//             } else {

//             }
//         });
//     }
}
