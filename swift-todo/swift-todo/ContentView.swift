//
//  ContentView.swift
//  swift-todo
//
//  Created by 陈运棋 on 2024/11/27.
//

import SwiftUI
import Foundation
import OpenAPIURLSession

struct ContentView: View {
    var client = Client(serverURL:  URL(string: "http://localhost:3000")!  , transport: URLSessionTransport());
    func login() async{
     
        do{
            let response = try await client.AuthController_login(body: Operations.AuthController_login.Input.Body.json(Components.Schemas.LoginUserDto(name: "viky", password: "123456")))
            print("\(try response.ok.body.json.access_token)")
//             switch response {
//             case .ok(let okResponse):
//                 switch okResponse.body {
//                 case .json(let user):
//                     print(user.access_token)
//                 }
//             case .undocumented(statusCode: let statusCode, _):
//                 print("🥺 undocumented response: \(statusCode)")
//             }
        } catch{
            
        }
        
        
    }
    
//    func loginCompletion( res: LoginResponse?, error:Error?){
//        print("accessToken: \(res?.accessToken.stringValue)")
//    }
    var body: some View {
        
        ZStack{
//            HStack{
//                
//            }.frame(width: 900,height: 1300).background(.red)
            GeometryReader { geometry in
                Button("按钮" ) {
                    Task{
                        await login()
                    }
//                    HStack {
//                        Text("+").font(.system(size: 80))
//                        
//                    }
                   
                }
                .frame(width: 80,height: 80)
                .background(.black)
                .foregroundColor(Color.white).cornerRadius(10).position(x:geometry.size.width - 50,y: geometry.size.height - 50)
            }
            
        }
        .padding()
        
    }
}

#Preview {
    ContentView()
}
