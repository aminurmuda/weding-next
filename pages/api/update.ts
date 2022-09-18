import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

type SheetForm = {
  check: number;
  row: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "PUT") {
    return res.status(405).send({ message: "Only PUT allowed" });
  }

  const body = req.body as SheetForm;

  try {
    // prepare auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `recipients!D${body.row}:D`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.check]],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (e: any) {
    return res
      .status(500)
      .send({ message: e.message ?? "Something went wrong" });
  }
}
