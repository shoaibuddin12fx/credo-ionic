

class cons {
    static secure = "";
    static domain = "invapp.automaticlot.com";
    //static let domain = "192.168.0.113/InventoryApi"
    static default_part = "api/Default";
    
    static crm_domain = "crmapp.automaticlot.com";
    static crm_default_part = "api/Crm";
    
}

export const Config = {    
    //static let BASE_IMAGE_URL = "http://invapp.automaticlot.com";
    //static let BASE_IMAGE_URL = "https://automaticlot.com";
    //static let BASE_IMAGE_URL = "http://ec2-54-211-238-136.compute-1.amazonaws.com";
    BASE_IMAGE_URL : "https://www.automaticlot.com",
    SERVICEURL : `http${cons.secure}://${cons.domain}/${cons.default_part}`,
    CRM_SERVICEURL : `http${cons.secure}://${cons.crm_domain}/${cons.crm_default_part}`,
    
};

