import { connect } from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'
import { sendMail } from '@/helpers/mailer'

import { NextRequest, NextResponse } from 'next/server'

connect()


export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        const { username, email, password } = reqBody;

        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "user already exist" }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        console.log(typeof hashedPassword)
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser)

        //send verification email:
        await sendMail({ email, emailType: "VERIFY", userId: savedUser._id })

        return NextResponse.json({
            message: "user registraterd succecfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }

        )
    }
}