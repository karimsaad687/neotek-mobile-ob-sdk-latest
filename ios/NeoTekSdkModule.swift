//
//  NeoTekSdkModule.swift
//  NeoTekSdkModule
//
//  Copyright © 2022 karim. All rights reserved.
//

import Foundation

@objc(NeoTekSdkModule)
class NeoTekSdkModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
