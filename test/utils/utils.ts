interface EmailData {
  subject: string;
  fromAddress: string;
  messageId: string;
  emailMessageTextRaw: string;
}

export let globalEmailData: EmailData | undefined;

export const getLatestEmail = async () => {
  const apiKey = process.env.EMAIL_APIKEY;
  const emailEncoded = `${process.env.EMAIL}`.replace(/@/g, "%40");
  const apiUrl = `${process.env.EMAIL_URL}addresses/${emailEncoded}/messages`;
  const response = await fetch(apiUrl, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Mailsac-Key": `${apiKey}`,
    },
  });

  const json = await response.json();
  globalEmailData = {
    subject: json[0].subject,
    fromAddress: json[0].from[0].address,
    messageId: json[0]._id,
    emailMessageTextRaw: "",
  };
};

export const cleanEmailBox = async () => {
  const apiKey = process.env.EMAIL_APIKEY;
  const emailEncoded = `${process.env.EMAIL}`.replace(/@/g, "%40");
  const apiUrl = `${process.env.EMAIL_URL}addresses/${emailEncoded}/messages`;
  await fetch(apiUrl, {
    method: "delete",
    headers: {
      "Mailsac-Key": `${apiKey}`,
    },
  });
};

export const getEmailMessage = async () => {
  const apiKey = process.env.EMAIL_APIKEY;
  const emailEncoded = `${process.env.EMAIL}`.replace(/@/g, "%40");
  const apiUrl = `${process.env.EMAIL_URL}body/${emailEncoded}/${globalEmailData?.messageId}`;
  const response = await fetch(apiUrl, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Mailsac-Key": `${apiKey}`,
    },
  });
  const reponseText = await response.text();
  globalEmailData!.emailMessageTextRaw = reponseText;
};

export function convertDateFormat(inputDate: string): string {
  const dateObject = new Date(inputDate);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;

  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
