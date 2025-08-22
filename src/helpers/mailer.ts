import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer"

export const sendMail = async ({ email, emailType, userId }: any) => {
    try {
        const hashedToken = bcrypt.hash(userId.toString(), 10);
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, { verifyToken: hashedToken }, { verifyTokenExpiry: Date.now() + 3600000 })
        }
        else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, { forgotPassword: hashedToken }, { forgotPasswordExpiry: Date.now() + 3600000 })
        }

        // var transport = nodemailer.createTransport({
        //     host: "live.smtp.mailtrap.io",
        //     port: 587,
        //     auth: {
        //         user: "api",
        //         pass: "c85161f5b0a182245915cfcbe52ed5ae"
        //     }
        // });


        const mailOptions = {
            from: 'admin@test.ai',
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password",
            html: `<p>
  Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to 
  ${emailType === "VERIFY" ? "verify your email" : "reset your password"}<br>
  or copy and paste the link below in your browser.<br>
  ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
</p>`,

        }

        // const mailResponse = await transport.sendMail(mailOptions)
        // return mailResponse;
    } catch (error: any) {
        throw new Error(error.message)
    }
}