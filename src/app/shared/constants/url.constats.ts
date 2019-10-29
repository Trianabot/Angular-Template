

import { environment } from '../../../environments/environment';

export class UrlConstants {

    private static readonly hostUrl = environment.baseUrl;

    private static readonly USER_MANAGEMENT_SERVICE_PATTERN = "/um";

    private static readonly AUTH_SERVICE_PATTERN = "/auth";

    private static readonly DEVICE_CONTROL_SERVICE_PATTERN = "/dc";

    private static readonly USER_ROUTE = "/user";

    private static readonly MANUFACTURER_ROUTE = "/manufacturer";

    private static readonly ADMIN_ROUTE = "/admin";

    private static readonly DEVICE_CATEGORY_ROUTE = "/deviceCategory";

    private static readonly USER_PROFILE_ROUTE = "/userProfile";

    private static readonly USER_VERIFICATION_ROUTE = "/userVerification";

    private static readonly VERIFY_EMAIL_ROUTE = "/verifyEmail";

    private static readonly DEVICE_ROUTE = "/device";

    private static readonly DEVICE_REGISTRATION_TEMPLATE_FILE = "/deviceRegistrationTemplateFile";

    private static readonly BULK_DEVICE_REGISTRATION_ROUTE = "/bulkDeviceRegistration";

    private static readonly ROOM = "/room";

    private static readonly CONTROL_DEVICE = "/controlDevice";

    private static readonly SHARE_ROOM = "/share";

    private static readonly DEVICE_STATUS = "/deviceStatus";

    public static readonly loginUrl = UrlConstants.hostUrl + UrlConstants.AUTH_SERVICE_PATTERN + '/oauth/token';

    public static readonly checkTokenUrl = UrlConstants.hostUrl + UrlConstants.AUTH_SERVICE_PATTERN + '/oauth/check_token?token=';



}