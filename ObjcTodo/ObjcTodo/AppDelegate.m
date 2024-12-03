//
//  AppDelegate.m
//  ObjcTodo
//
//  Created by 陈运棋 on 2024/12/3.
//

#import "AppDelegate.h"
#import "Controller/SplashController/SplashController.h"

@interface AppDelegate ()

@end

@implementation AppDelegate



- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    SplashController *controller = [SplashController new];
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.rootViewController = controller;
    [self.window makeKeyAndVisible];
    return YES;
}

@end
