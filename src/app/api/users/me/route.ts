import { connect } from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server"
import User from "@/models/userModel"

import { getDataFromToken } from "@/helpers/getDataFromToken"
import { error } from "console"

connect()

export async function POST(request: NextRequest) {
    const userId = await getDataFromToken(request)

    const user = await User.findOne({ _id: userId }).select("-password")
    return NextResponse.json({
        message: "user found",
        data: user
    })
}