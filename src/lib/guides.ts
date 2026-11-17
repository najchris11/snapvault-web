export type Guide = {
  path: string;
  title: string;
  description: string;
  sections: { title: string; paragraphs: string[] }[];
  sources: { label: string; url: string }[];
};
export const GUIDES: Guide[] = [
  {
    path: '/guides/snapchat-5gb-limit-january-2027',
    title: 'Snapchat’s 5 GB Memories limit: prepare for January 2027',
    description:
      'Understand Snapchat’s Memories archiving policy and make a local backup before you need to choose a paid storage plan.',
    sections: [
      {
        title: 'Archiving is not deletion',
        paragraphs: [
          'Snapchat’s support page says that starting in January 2027, Memories more than one year old and outside your oldest 5 GB will be archived and remain stored on Snapchat. This is not an announcement that all your Memories will be deleted on January 1. Check your own account’s storage notices: eligibility and plan options depend on your account.',
          'Snapchat says it committed to 12 months of temporary storage for affected users when it announced storage plans. Exporting a copy gives you another way to keep and organize your media; it does not change your Snapchat subscription or remove content from your account.',
        ],
      },
      {
        title: 'Request a complete export',
        paragraphs: [
          'Sign in at accounts.snapchat.com, open My Data, and request an export containing Memories for your full date range. Wait for Snapchat’s email and download every ZIP part to your computer. Keep the archives together; missing parts mean missing media.',
          'Before processing, make another copy of the downloaded archives if possible. Allow room for the extracted library, combined media, and temporary processing files. An export request can take time, so start before the point when you urgently need access.',
        ],
      },
      {
        title: 'Restore, inspect, and make a second backup',
        paragraphs: [
          'Install SnapVault for your computer and choose the export folder. Modern ZIP imports run locally. Date and GPS recovery depend on the records and timestamps Snapchat included; SnapVault does not invent missing location data.',
          'Enable Keep original unmerged files if you want clean media and separate overlay assets alongside captioned copies. Leave Preview duplicate removal on for your first run. Inspect a sample of old and new photos, videos, and captioned memories in Library, then copy the verified library to another drive or your preferred photo service. Keep your Snapchat copy until you are satisfied with both backups.',
        ],
      },
    ],
    sources: [
      {
        label: 'Snapchat: How do I manage my Memories storage?',
        url: 'https://help.snapchat.com/hc/en-us/articles/41291271694228-How-do-I-manage-my-Memories-storage',
      },
    ],
  },
  {
    path: '/guides/fix-snapchat-export-missing-dates-overlays',
    title: 'Fix dates, GPS, and detached captions in a Snapchat export',
    description:
      'Learn what SnapVault can recover from ZIP timestamps and export history, how overlay combination works, and what to inspect before deleting originals.',
    sections: [
      {
        title: 'Keep the original ZIP archives',
        paragraphs: [
          'A file’s “created” date after downloading or extracting may describe the copy, not the moment you captured the memory. SnapVault reads extended timestamps in supported ZIP entries and compares them with memories_history.json to recover more precise capture metadata.',
          'Choose the export ZIPs directly instead of extracting everything first. An extracted folder containing history can still use the legacy download flow, but a plain media folder cannot recreate ZIP-only timestamps that were discarded during extraction. Ambiguous matches are left without guessed GPS.',
        ],
      },
      {
        title: 'Combine overlays without losing clean copies',
        paragraphs: [
          'Snapchat can export a photo or video separately from its caption/sticker overlay. Combining those pairs produces a viewable media file with the edit rendered into it. Supported formats and video tooling vary by platform; desktop has the most complete pipeline.',
          'On Dashboard, use Combine photo and video overlays. Enable Keep original unmerged files to preserve the separate photo/video and overlay. Otherwise, successful combination with carried metadata can permanently remove the source pair. Duplicate cleanup has its own controls: keep Preview duplicate removal enabled while reviewing your first run.',
        ],
      },
      {
        title: 'Verify the recovered result',
        paragraphs: [
          'Inspect multiple dates, videos, and overlay examples in Library. GPS metadata is embedded in the output and travels with shared copies; disable precise time and GPS matching if you prefer date-only metadata. A missing GPS badge may simply mean there was no trustworthy matching location record.',
          'If a combined file is absent, read the run log for unsupported formats, missing tools, or metadata failures. macOS and Windows include FFmpeg and ExifTool. Linux also needs FFmpeg and Perl available. Retain your original export so you can rerun after resolving a problem.',
        ],
      },
    ],
    sources: [
      {
        label: 'SnapVault source and format handling',
        url: 'https://github.com/najchris11/snapchat-memories-downloader',
      },
    ],
  },
  {
    path: '/guides/import-snapchat-memories-to-apple-photos-google-photos',
    title: 'Move Snapchat Memories to Apple Photos or Google Photos',
    description:
      'Restore a local Snapchat media library first, verify capture metadata and captions, then import a small sample into your photo service before uploading everything.',
    sections: [
      {
        title: 'Build a portable library first',
        paragraphs: [
          'Request a Memories export from Snapchat and download every ZIP part. Use SnapVault’s desktop installer to process those archives into a separate output directory. Modern ZIP processing happens locally; importing a legacy history file downloads media from the links Snapchat provided.',
          'Enable date metadata and precise matching if you want recoverable GPS. Combine overlays for captions and stickers. Choose Keep original unmerged files if you want both clean and captioned versions, but consider whether you want both copies in your final photo library.',
        ],
      },
      {
        title: 'Test a small import',
        paragraphs: [
          'Select a handful of photos and videos across several dates, including a captioned example. In Apple Photos on a Mac, use File → Import and select those files. For Google Photos, use its web upload controls or your chosen backup client. Import controls vary by operating system and app version.',
          'Check that capture dates and visible overlays look correct. Time display and timezone interpretation differ between photo services, so compare a late-night memory with a date you know. SnapVault can recover only metadata present in the export; a successful import is not proof that every missing timestamp or location was reconstructed.',
        ],
      },
      {
        title: 'Upload deliberately and retain an offline backup',
        paragraphs: [
          'Once the sample looks right, import the remaining output files. Uploading to Apple or Google is a separate action outside SnapVault and uses that provider’s account, network connection, and storage allowance. A large Snapchat archive may exceed the free storage available there.',
          'Keep your original ZIPs and a verified copy of the restored directory on another drive. Review duplicate-handling behavior in the destination before importing clean originals, captioned composites, or repeated runs together. Do not delete your only local copy simply because an upload has started.',
        ],
      },
    ],
    sources: [
      {
        label: 'SnapVault tutorial',
        url: 'https://snapvault.naj-dev.com/tutorial',
      },
    ],
  },
  {
    path: '/vs/free-snapchat-memories-exporter',
    title: 'Choosing a free Snapchat Memories exporter',
    description:
      'Compare Snapchat’s export, command-line downloaders, and SnapVault’s desktop workflow using privacy, metadata recovery, overlays, platform support, and backup control.',
    sections: [
      {
        title: 'Start with what Snapchat actually exports',
        paragraphs: [
          'Every backup tool depends on the media and history Snapchat makes available. Request your account’s export through Snapchat first. No independent exporter can guarantee recovery of content that was not included, expired download links, or missing location records.',
          'A ZIP extraction tool gives you media files, but it may not restore capture tags or combine separate overlays. A link downloader can retrieve media referenced in older history files, but those URLs need to remain accessible. These are different jobs, so compare tools against the export format you have.',
        ],
      },
      {
        title: 'Compare workflows, not promises',
        paragraphs: [
          'A command-line project can be a good fit if you are comfortable installing its runtime and reviewing logs. Check its license, supported formats, maintenance, and dependencies. “Free” should be verified at the point of processing, including any file-count limit or payment needed to finish a large export.',
          'SnapVault is GPL-3.0 software with no processing paywall or account requirement. The desktop app bundles FFmpeg and ExifTool on macOS and Windows, imports multi-part ZIPs, restores supported date/GPS metadata, combines overlays, and includes a local Library. Linux needs FFmpeg and Perl; mobile feature coverage differs from desktop.',
        ],
      },
      {
        title: 'Protect your originals while evaluating',
        paragraphs: [
          'Use a small copied export as a trial. Confirm whether the tool sends media to a service, how it handles ambiguous GPS matching, and which operations delete files. SnapVault’s ZIP workflow is local; legacy history import downloads directly from export links. Its update check is optional and initiated in Settings.',
          'For your first SnapVault run, enable Keep original unmerged files and leave Preview duplicate removal enabled. Review photos, videos, and logs before running deletion steps. Whichever tool you choose, keep at least two verified copies and retain the original export until the result is complete.',
        ],
      },
    ],
    sources: [
      {
        label: 'SnapVault source, license, and platform notes',
        url: 'https://github.com/najchris11/snapchat-memories-downloader',
      },
      {
        label: 'SnapVault privacy policy',
        url: 'https://github.com/najchris11/snapchat-memories-downloader/blob/main/PRIVACY.md',
      },
    ],
  },
];
