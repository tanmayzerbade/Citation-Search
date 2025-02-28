import axios, { Axios } from 'axios';
const API_URL = "http://192.168.0.102:8082/aironline";
// const API_URL = "http://192.168.0.99:8080/aironline"; //testserver
// const API_URL = "http://128.127.49.63:8085/aironline"; //Conference
// const API_URL = "http://192.168.1.6:8085/aironline"; //Arbitration

// const API_URL = "https://aisnagpur.com/aironline";

// const API_URL = "http://192.168.137.62:8085/aironline"; // arbitratiion

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiUk9MRV9BRE1JTiIsImlzMmZhRW5hYmxlZCI6ZmFsc2UsImlhdCI6MTc0MDczMjgzMiwiZXhwIjoxNzQwNzQyODMyfQ.8Piyq06XNuS8rhlugRPHWaxMMP2_aO87_Pi_sFL1K47aGdKBzlHP5yyh82MthqQLD-IZxPRwx_wfcFBZpWHlzw';
export const getJournal = async () => {
  try {
    console.log('Authorization Header:', `Bearer ${token}`);
    const response = await axios.get(`${API_URL}/api/citation/journalName`, {
      headers: {
        Authorization: `Bearer ${token}`,
        // 'Content-Type': 'application/json',
      },
    });
    console.log("journal", response.data);
    return response.data;
  }
  catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}
export const getJournalYear = async (journalName) => {
  try {
    const response = await axios.get(`${API_URL}/api/citation/journalYear`,
      {
        params:{
          journalName: journalName,

        },
        headers:{
          Authorization: `Bearer ${token}`
        },
      });
      
      // journalName=` + journalName)

    return response.data;
  }
  catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';

  }
}

export const getJournalSegment = async (journalName, journalYear) => {
  try {
    const response = await axios.get(`${API_URL}/api/citation/publication/segment`,
      {
        params:{
          journalName: journalName,
          journalYear: journalYear,

        },
        headers:{
          Authorization: `Bearer ${token}`
        },
      });
      
      
      
      // journalName=` + journalName + `&journalYear=` + journalYear)

    return response.data;
  }
  catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';

  }
}
export const getJournalCourt = async (journalName, journalYear, journalSegmant,volumeNo) => {

  try {
    const response = await axios.get(`${API_URL}/api/citation/courtName`,
      {
        params:{
          journalName: journalName,
          journalYear: journalYear,
          publicationSegment: journalSegmant,
          volumeNo: volumeNo ||'',

        },
        headers:{
          Authorization: `Bearer ${token}`
        },
      });
      console.log(response);
      // journalName=` + journalName + `&journalYear=` + journalYear + `&publicationSegment=` + journalSegmant)
    return response.data;
  } catch (error) {

    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';

  }
}
export const getJournalPage = async (journalName, journalYear, journalSegmant, journalCourt, volumeNo) => {
  try {
    const response = await axios.get(`${API_URL}/api/citation/pageNo`,
      {
        params:{
          journalName: journalName,
          journalYear: journalYear,
          publicationSegment: journalSegmant,
          courtName: journalCourt,
          volumeNo: volumeNo ||'',
        },
        headers:{
          Authorization: `Bearer ${token}`
        },
      });
      // journalName=` + journalName + `&journalYear=` + journalYear + `&publicationSegment=` + journalSegmant + `&courtName=` + journalCourt)
    return response.data;
  } catch (error) {

    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';

  }
}
export const getCitation = async (journalName, journalYear, journalSegmant, journalCourt, journalPage, volumeNo) => {
  try {
    const response = await axios.get(`${API_URL}/api/citation/citationList`,
      {
        params:{
          journalName: journalName,
          journalYear: journalYear,
          publicationSegment: journalSegmant,
          courtName: journalCourt,
          pageNumber: journalPage,
          volumeNo: volumeNo ||'',
        },
        headers:{
          Authorization: `Bearer ${token}`
        },
      });
      // journalName=` + journalName + `&journalYear=` + journalYear + `&publicationSegment=` + journalSegmant + `&courtName=` + journalCourt + `&pageNumber=` + journalPage)

    console.log("getCitation",response.data)

    return response.data;
  } catch (error) {

    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';

  }
}
export const getjudgement = async (citationID) => {
  try {
    const response = await axios.get(`${API_URL}/api/judgement?citationID=` + citationID)

    return response.data;
  } catch (error) {

    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';

  }
}
export const getCourtList = async (courtName) => {
  try {
    // console.log("courtName", courtName);
    var url = `${API_URL}/court/courtNamelist?searchCourtName=`;
    if (courtName === undefined) {
      url += "";
      // console.log("url 1", url);
    } else {
      url += courtName
      // console.log("url 2", url);
    }

    const response = await axios.get(url)

    return response.data;
  } catch (error) {

    // console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';

  }
}
export const getCourtDigestView = async (courtNameList, limit, offset) => {

  console.log(`${API_URL}/digestView/digest?court=` + courtNameList + `&limit=` + limit + `&offset=` + offset + `&judges=` + '' + `&benchStrength=` + '' + `&fts=` + '' + `&acs=` + '' + `&topical=` + '' + `&or=` + '' + `&and=` + '' + `&benchTypeFullName=` + '' + `&searchLawyerName=` + '' + `&lawyerFlag=` + '' + `&actName=` + '' + `&section=` + '' + `&section=` + '' + `&actSectionFlag=` + '' + `&searchFlag=` + '' + `&decision_period=` + '' + `&fromDate=` + '' + `&toDate=` + '' + `&judgmentDateFlag=` + '' + `&searchPhrase=` + '' + `&sortOrder=` + '' + `&proximitySearch=` + 0 + `&fieldsSearch=` + '');


  try {
    const response = await axios.get(`${API_URL}/digestView/digest?court=` + courtNameList + `&limit=` + limit + `&offset=` + offset + `&judges=` + '' + `&benchStrength=` + '' + `&fts=` + '' + `&acs=` + '' + `&topical=` + '' + `&or=` + '' + `&and=` + '' + `&benchTypeFullName=` + '' + `&searchLawyerName=` + '' + `&lawyerFlag=` + '' + `&actName=` + '' + `&section=` + '' + `&section=` + '' + `&actSectionFlag=` + '' + `&searchFlag=` + '' + `&decision_period=` + '' + `&fromDate=` + '' + `&toDate=` + '' + `&judgmentDateFlag=` + '' + `&searchPhrase=` + '' + `&sortOrder=` + '' + `&proximitySearch=` + 0 + `&fieldsSearch=` + '');
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}
export const getNominalCourt = async () => {
  try {
    const response = await axios.get(`${API_URL}/nominal/courtName`);
    return response.data;

  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}
export const getNominalDetails = async (nominalSearch, courtName, searchString, limit, page) => {
  try {
    const response = await axios.get(`${API_URL}/nominal/nominalList?nominalSearch=` + nominalSearch + `&courtName=` + courtName + `&searchString=` + searchString + `&limit=10&offset=` + page)
    console.log("API", `${API_URL}/nominal/nominalList?nominalSearch=` + nominalSearch + `&courtName=` + courtName + `&searchString=` + searchString + `&limit=10&offset=` + page);
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const getLawyer = async (lawyerName, limit, page) => {
  console.log("API", `${API_URL}/digestView/digest?searchLawyerName=` + lawyerName + `&limit=10&offset=` + page + `&court=` + '' + `&judges=` + '' + `&benchStrength=` + '' + `&fts=` + '' + `&acs=` + '' + `&topical=` + '' + `&or=` + '' + `&and=` + '' + `&benchTypeFullName=` + '' + `&lawyerFlag=` + 'lawyer' + `&actName=` + '' + `&section=` + '' + `&section=` + '' + `&actSectionFlag=` + '' + `&searchFlag=` + '' + `&decision_period=` + '' + `&fromDate=` + '' + `&toDate=` + '' + `&judgmentDateFlag=` + '' + `&searchPhrase=` + '' + `&sortOrder=` + '' + `&proximitySearch=` + 0 + `&fieldsSearch=` + '');
  try {
    const response = await axios.get(`${API_URL}/digestView/digest?searchLawyerName=` + lawyerName + `&limit=10&offset=` + page + `&court=` + '' + `&judges=` + '' + `&benchStrength=` + '' + `&fts=` + '' + `&acs=` + '' + `&topical=` + '' + `&or=` + '' + `&and=` + '' + `&benchTypeFullName=` + '' + `&lawyerFlag=` + 'lawyer' + `&actName=` + '' + `&section=` + '' + `&section=` + '' + `&actSectionFlag=` + '' + `&searchFlag=` + '' + `&decision_period=` + '' + `&fromDate=` + '' + `&toDate=` + '' + `&judgmentDateFlag=` + '' + `&searchPhrase=` + '' + `&sortOrder=` + '' + `&proximitySearch=` + 0 + `&fieldsSearch=` + '')

    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}
export const getBenchStrength = async () => {
  try {
    const response = await axios.get(`${API_URL}/benchstrength/benchName`);
    console.log("API", `${API_URL}/benchstrength/benchName`);
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const getJudgementDateDetails = async (decision_period, fromDate, toDate, limit, page) => {
  try {
    const response = await axios.get(`${API_URL}/judgmentDate/searchJudgmentDate?decision_period=` + decision_period + `&fromDate=` + fromDate + `&toDate=` + toDate + `&limit=10&offset=` + page);
    console.log("API", `${API_URL}/judgmentDate/searchJudgmentDate?decision_period=` + decision_period + `&fromDate=` + fromDate + `&toDate=` + toDate + `&limit=10&offset=` + page);
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }

}

export const getBenchStrengthDetails = async (benchStrength, benchTypeFullName, limit, offset) => {
  console.log("getBenchStrengthDetails", `${API_URL}/digestView/digest?benchStrength=` + benchStrength + `&limit=` + limit + `&offset=` + offset + `&judges=` + '' + `&court=` + '' + `&fts=` + '' + `&acs=` + '' + `&topical=` + '' + `&or=` + '' + `&and=` + '' + `&benchTypeFullName=` + benchTypeFullName + `&searchLawyerName=` + '' + `&lawyerFlag=` + '' + `&actName=` + '' + `&section=` + '' + `&section=` + '' + `&actSectionFlag=` + '' + `&searchFlag=` + '' + `&decision_period=` + '' + `&fromDate=` + '' + `&toDate=` + '' + `&judgmentDateFlag=` + '' + `&searchPhrase=` + '' + `&sortOrder=` + '' + `&proximitySearch=` + 0 + `&fieldsSearch=` + '');
  try {
    const response = await axios.get(`${API_URL}/digestView/digest?benchStrength=` + benchStrength + `&limit=` + limit + `&offset=` + offset + `&judges=` + '' + `&court=` + '' + `&fts=` + '' + `&acs=` + '' + `&topical=` + '' + `&or=` + '' + `&and=` + '' + `&benchTypeFullName=` + benchTypeFullName + `&searchLawyerName=` + '' + `&lawyerFlag=` + '' + `&actName=` + '' + `&section=` + '' + `&section=` + '' + `&actSectionFlag=` + '' + `&searchFlag=` + '' + `&decision_period=` + '' + `&fromDate=` + '' + `&toDate=` + '' + `&judgmentDateFlag=` + '' + `&searchPhrase=` + '' + `&sortOrder=` + '' + `&proximitySearch=` + 0 + `&fieldsSearch=` + '');
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const getFTSDigestView = async (fts, limit, offset, courts, judges, benchStrength, Case_Results, Decision_Years, nominal_app, nominal_res, topics, searchFilter, searchInSearch) => {
  console.log(
    {
      fts: fts,
      limit: limit,
      offset: offset,
      judges: judges || '',
      benchStrength: '',
      court: courts || '',
      acs: '', 
      or: '',
      and: '',
      benchTypeFullName: benchStrength || '',
      searchLawyerName: '',
      lawyerFlag: '',
      actName: '',
      section: '',
      actSectionFlag: '',
      searchFlag: '',
      decision_period: Decision_Years || '',
      fromDate: '',
      toDate: '',
      judgmentDateFlag: '',
      searchPhrase: 'allWords',
      sortOrder: 'desc',
      proximitySearch: 0,
      fieldsSearch: 'Citation_Year',
      searchFilter: searchFilter || '',
      case_result: Case_Results || '',
      nominal_app: nominal_app || '',
      nominal_res: nominal_res || '',
      year_decision: Decision_Years || '',
      topical: topics || '',
      searchInSearch: searchInSearch || ''



    }
  );

  try {

    const response = await axios.get(`${API_URL}/digestView/digest`,
      {
        params: {
          fts: fts,
          limit: limit,
          offset: offset,
          judges: judges || '',
          benchStrength: '',
          court: courts || '',
          acs: '',
          topical: '',
          or: '',
          and: '',
          benchTypeFullName: benchStrength || '',
          searchLawyerName: '',
          lawyerFlag: '',
          actName: '',
          section: '',
          actSectionFlag: '',
          searchFlag: '',
          decision_period: Decision_Years || '',
          fromDate: '',
          toDate: '',
          judgmentDateFlag: '',
          searchPhrase: 'allWords',
          sortOrder: 'desc',
          proximitySearch: 0,
          fieldsSearch: 'Citation_Year',
          searchFilter: searchFilter || '',
          case_result: Case_Results || '',
          nominal_app: nominal_app || '',
          nominal_res: nominal_res || '',
          year_decision: Decision_Years || '',
          topical: topics || '',
          searchInSearch: searchInSearch || ''

        }
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const getTopicalDigestView = async (searchword, limit, offset) => {

  console.log(`${API_URL} /digestView/digest ? topical = ` + searchword + ` & limit=` + limit + ` & offset=` + offset + ` & judges=` + '' + ` & benchStrength=` + '' + ` & court=` + '' + ` & acs=` + '' + ` & fts=` + '' + ` & or=` + '' + ` & and=` + '' + ` & benchTypeFullName=` + '' + ` & searchLawyerName=` + '' + ` & lawyerFlag=` + '' + ` & actName=` + '' + ` & section=` + '' + ` & section=` + '' + ` & actSectionFlag=` + '' + ` & searchFlag=` + '' + ` & decision_period=` + '' + ` & fromDate=` + '' + ` & toDate=` + '' + ` & judgmentDateFlag=` + '' + ` & searchPhrase=` + '' + ` & sortOrder=` + '' + ` & proximitySearch=` + 0 + ` & fieldsSearch=` + '');
  try {
    const response = await axios.get(`${API_URL} /digestView/digest ? topical = ` + searchword + ` & limit=` + limit + ` & offset=` + offset + ` & judges=` + '' + ` & benchStrength=` + '' + ` & court=` + '' + ` & acs=` + '' + ` & fts=` + '' + ` & or=` + '' + ` & and=` + '' + ` & benchTypeFullName=` + '' + ` & searchLawyerName=` + '' + ` & lawyerFlag=` + '' + ` & actName=` + '' + ` & section=` + '' + ` & section=` + '' + ` & actSectionFlag=` + '' + ` & searchFlag=` + '' + ` & decision_period=` + '' + ` & fromDate=` + '' + ` & toDate=` + '' + ` & judgmentDateFlag=` + '' + ` & searchPhrase=` + '' + ` & sortOrder=` + '' + ` & proximitySearch=` + 0 + ` & fieldsSearch=` + '');
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const getTopicalWords = async (topic) => {
  console.log(`${API_URL} /topic/topicname ? searchTopic = ` + topic);
  try {
    const response = await axios.get(`${API_URL} /topic/topicname ? searchTopic = ` + topic);
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const RegisterApi = async (name, email, mobno, password, fullname) => {
  console.log(`${API_URL} /opi/users / registration ? username = ` + name +
    `& password=` + password +
    `& email=` + email +
    `& fullName=` + fullname +
    `& mobileNumber=` + mobno +
    `& countryCode=` + 91);
  try {
    const response = await axios.get(`${API_URL} /opi/users / registration ? username = ` + name +
      `& password=` + password +
      `& email=` + email +
      `& fullName=` + fullname +
      `& mobileNumber=` + mobno +
      `& countryCode=` + 91);
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const getJudgesList = async (name) => {
  console.log(`${API_URL} /judge/judgeNameList ? searchJudgeName = ` + name);
  try {
    const response = await axios.get(`${API_URL} /judge/judgeNameList ? searchJudgeName = ` + name);
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const getJudgeDetails = async (judgesList, and, or, limit, offset) => {
  console.log("getJudgeDetails", `${API_URL} /digestView/digest ? judges = ` + judgesList + ` & limit=` + limit + ` & offset=` + offset + ` & court=` + '' + ` & fts=` + '' + ` & acs=` + '' + ` & topical=` + '' + ` & or=` + or + ` & and=` + and + ` & benchTypeFullName=` + '' + ` & benchStrength=` + '' + ` & searchLawyerName=` + '' + ` & lawyerFlag=` + '' + ` & actName=` + '' + ` & section=` + '' + ` & section=` + '' + ` & actSectionFlag=` + '' + ` & searchFlag=` + '' + ` & decision_period=` + '' + ` & fromDate=` + '' + ` & toDate=` + '' + ` & judgmentDateFlag=` + '' + ` & searchPhrase=` + '' + ` & sortOrder=` + '' + ` & proximitySearch=` + 0 + ` & fieldsSearch=` + '');
  try {
    const response = await axios.get(`${API_URL} /digestView/digest ? judges = ` + judgesList + ` & limit=` + limit + ` & offset=` + offset + ` & court=` + '' + ` & fts=` + '' + ` & acs=` + '' + ` & topical=` + '' + ` & or=` + or + ` & and=` + and + ` & benchTypeFullName=` + '' + ` & benchStrength=` + '' + ` & searchLawyerName=` + '' + ` & lawyerFlag=` + '' + ` & actName=` + '' + ` & section=` + '' + ` & section=` + '' + ` & actSectionFlag=` + '' + ` & searchFlag=` + '' + ` & decision_period=` + '' + ` & fromDate=` + '' + ` & toDate=` + '' + ` & judgmentDateFlag=` + '' + ` & searchPhrase=` + '' + ` & sortOrder=` + '' + ` & proximitySearch=` + 0 + ` & fieldsSearch=` + '');
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}
export const verifyUser = async (username, useremail, usermobileNumber) => {
  try {
    const requestBody = {};
    if (username) {
      requestBody.username = username
    }
    if (useremail) {
      requestBody.email = useremail
    }
    if (usermobileNumber) {
      requestBody.mobno = usermobileNumber
    }

    const response = await axios.post("http://192.168.0.143:8080/auth/verify",
      requestBody);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const registerUser = async (name, email, mobno, password, fullName, value, couponSerialNo, couponCode, checked) => {
  try {
    const requestBody = {}
    if (value === '1') {
      requestBody.userName = name,
        requestBody.email = email,
        requestBody.password = password,
        requestBody.countryCode = '+91',
        requestBody.mobile = mobno,
        requestBody.userRole = 'ROLE_USER',
        requestBody.productFullName = 'DemoCoupon',
        requestBody.userFullName = fullName,
        requestBody.acceptTerms = true
    }
    else {
      requestBody.userName = name,
        requestBody.email = email,
        requestBody.password = password,
        requestBody.countryCode = '+91',
        requestBody.mobile = mobno,
        requestBody.userRole = 'ROLE_USER',
        requestBody.couponSerialNumber = couponSerialNo,
        requestBody.couponCode = couponCode,
        requestBody.userFullName = fullName,
        requestBody.acceptTerms = true
    }
    const response = await axios.post(`http://192.168.0.143:8080/auth/addUser`,

      requestBody

    );
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}
export const getDefaultArticle = async (limit, offset) => {
  console.log(`${API_URL}/article/default_article?searchString=&articleKeywordSearch=&articleTitleSearch=&articleAuthorSearch=&limit=` + limit + `&offset=` + offset + `&articleCategorySearch=`);
  try {
    const response = await axios.get(`${API_URL}/article/default_article?searchString=&articleKeywordSearch=&articleTitleSearch=&articleAuthorSearch=&limit=` + limit + `&offset=` + offset + `&articleCategorySearch=`)
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}
export const getArticleDetails = async (articleID) => {
  console.log(`${API_URL}/article/full_article?articleID=` + articleID);
  try {
    const response = await axios.get(`${API_URL}/article/full_article?articleID=` + articleID)
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }

}
export const getArticleSearch = async (string) => {
  console.log(`${API_URL}/article/search_articleTitle?articleTitle=` + string);
  try {
    const response = await axios.get(`${API_URL}/article/search_articleTitle?articleTitle=` + string)
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}

export const getArticleAuthorSearch = async (string) => {
  console.log(`${API_URL}/article/search_articleAuthor?articleAuthor=` + string);
  try {
    const response = await axios.get(`${API_URL}/article/search_articleAuthor?articleAuthor=` + string)
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}


export const getArticleKeywordSearch = async (string) => {
  console.log(`${API_URL}/article/search_articleKeywords?articleKeywords=` + string);
  try {
    const response = await axios.get(`${API_URL}/article/search_articleKeywords?articleKeywords=` + string)
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}
export const getActList = async (limit, offset, searchString) => {
  if (searchString === undefined) {
    searchString = '';
  }
  console.log(`${API_URL}/act/act_list?searchString=` + searchString + `&limit=` + limit + `&offset=` + offset);
  try {
    const response = await axios.get(`${API_URL}/act/act_list?searchString=` + searchString + `&limit=` + limit + `&offset=` + offset)
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';

  }
}
export const getSectionDetails = async (actName, actId) => {

  if (actId === undefined) {
    actId = '';
  }
  // console.log("section details",`${API_URL}/act/section_list?actName=` + searchText + `&actID=` + actId + `&limit=` + limit + `&offset=` + offset);

  try {
    const response = await axios.get(`${API_URL}/act/section_list?actName=` + actName + `&actID=` + actId)
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }

}
export const getApi = async (searchString) => {

  console.log(`${API_URL}/article/search_article?searching=` + searchString);
  try {
    const response = await axios.get(`${API_URL}/article/search_article?searching=` + searchString)
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';

  }

}

export const getArticleDigestDetails = async (searchString, SearchInput, limit, offset) => {


  const requestBody = {}

  if (SearchInput === 'Article Title') {
    requestBody.articleTitleSearch = 'articleTitleSearch';
    requestBody.articleAuthorSearch = '';
    requestBody.articleCategorySearch = '';
    requestBody.articleKeywordSearch = '';
  } else if (SearchInput === 'Article Author') {
    requestBody.articleAuthorSearch = 'articleAuthorSearch';

    requestBody.articleTitleSearch = '';
    requestBody.articleAuthorSearch = 'articleAuthorSearch';
    requestBody.articleCategorySearch = '';
    requestBody.articleKeywordSearch = '';

  }
  else if (SearchInput === 'Article Category') {

    requestBody.articleTitleSearch = '';
    requestBody.articleAuthorSearch = '';
    requestBody.articleCategorySearch = 'articleCategorySearch';
    requestBody.articleKeywordSearch = '';
  }
  else if (SearchInput === 'Article Keywords') {

    requestBody.articleTitleSearch = '';
    requestBody.articleAuthorSearch = '';
    requestBody.articleCategorySearch = '';
    requestBody.articleKeywordSearch = 'articleKeywordSearch';
  }

  console.log("params",
    params = {
      ...requestBody,
      searchString,
      limit: limit,
      offset: offset
    }
  )

  try {
    const response = await axios.get(`${API_URL}/article/default_article`,
      {
        params: {
          ...requestBody,
          searchString: searchString,
          limit: limit,
          offset: offset
        }
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occured';
    }
    throw 'An unexpected error occured';

  }
}
export const getQueryApi = async (searchString, limit, offset) => {
  try {
    const response = await axios.get(`${API_URL}/article/search_fullText`,
      {
        params: {
          searchString: searchString,
          limit: limit,
          offset: offset
        }
      }
    )
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occured';
    }
    throw 'An unexpected error occured';

  }

}
export const getActSectionDetails = async (sectionList, actName, searchFlag, limit, offset) => {
  console.log("getActSectionDetails", `${API_URL}/digestView/digest?section=` + sectionList + `&limit=` + limit + `&offset=` + offset + `&judges=` + '' + `&court=` + '' + `&fts=` + '' + `&acs=` + '' + `&topical=` + '' + `&or=` + '' + `&and=` + '' + `&benchTypeFullName=` + '' + `&benchStrength=` + '' + `&searchLawyerName=` + '' + `&lawyerFlag=` + '' + `&actName=` + actName + `&actSectionFlag=` + '' + `&searchFlag=` + searchFlag + `&decision_period=` + '' + `&fromDate=` + '' + `&toDate=` + '' + `&judgmentDateFlag=` + '' + `&searchPhrase=` + '' + `&sortOrder=` + '' + `&proximitySearch=` + 0 + `&fieldsSearch=` + '');
  try {
    const response = await axios.get(`${API_URL}/digestView/digest?section=` + sectionList + `&limit=` + limit + `&offset=` + offset + `&judges=` + '' + `&court=` + '' + `&fts=` + '' + `&acs=` + '' + `&topical=` + '' + `&or=` + '' + `&and=` + '' + `&benchTypeFullName=` + '' + `&benchStrength=` + '' + `&searchLawyerName=` + '' + `&lawyerFlag=` + '' + `&actName=` + actName + `&actSectionFlag=` + '' + `&searchFlag=` + searchFlag + `&decision_period=` + '' + `&fromDate=` + '' + `&toDate=` + '' + `&judgmentDateFlag=` + '' + `&searchPhrase=` + '' + `&sortOrder=` + '' + `&proximitySearch=` + 0 + `&fieldsSearch=` + '');
    return response.data;
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || 'An error occurred';
    }
    throw 'An unexpected error occurred';
  }
}