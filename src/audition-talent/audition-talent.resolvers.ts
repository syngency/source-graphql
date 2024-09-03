import { Arg, Authorized, Ctx, Query, Mutation, Resolver } from "type-graphql";
import { Context } from "../context";
import { AuditionTalent, AuditionTalentMedia } from "./audition-talent.schema";
import {
  apiGetAuditionTalent, 
  apiUpdateAuditionTalentSeen,
  apiUpdateAuditionTalentReady,
  apiGetAuditionTalentMedia,
  apiUpdateAuditionTalentImageArchived,
  apiUpdateAuditionTalentVideoArchived,
  apiUpdateAuditionTalentMediaRanks,
  apiUpdateAuditionTalentVideoStitchPending,
  apiUpdateAuditionTalentVideoTrimPending
} from "../source_api";
import { GenericMutationResult } from "../generic/generic.schema";

@Resolver(() => AuditionTalent)
export class AuditionTalentResolver {
  @Authorized()
  @Query(() => [AuditionTalent])
  async auditionTalent(
    @Arg("jobDateId", { nullable: false })
    jobDateId: number,
    @Arg("searchString", { nullable: true })
    searchString: string,
    @Arg("statuses", { nullable: true })
    statuses: string,
    @Arg("roles", { nullable: true })
    roles: string,
    @Ctx() context: Context
  ): Promise<AuditionTalent[] | null> {
    try {
      const auditionTalent = await apiGetAuditionTalent(context.token, jobDateId, searchString, statuses,  roles);
      return auditionTalent;
    } catch (e:any) {
      console.error(e);
      throw new Error(e.message);
    }
    return null;
  }
}

@Resolver(() => AuditionTalentMedia)
export class AuditionTalentMediaResolver {
  @Authorized()
  @Query(() => [AuditionTalentMedia])
  async auditionTalentMedia(
    @Arg("jobDateId", { nullable: false })
    jobDateId: number,
    @Arg("jobBriefSupplierElementId", { nullable: false })
    jobBriefSupplierElementId: number,
    @Ctx() context: Context
  ): Promise<AuditionTalentMedia[] | null> {
    try {
      const auditionTalentMedia = await apiGetAuditionTalentMedia(context.token, jobDateId, jobBriefSupplierElementId);
      return auditionTalentMedia;
    } catch (e:any) {
      console.error(e);
      throw new Error(e.message);
    }
    return null;
  }
}

@Resolver(() => AuditionTalent)
export class AuditionTalentSeenResolver {
  @Authorized()
  @Mutation(() => AuditionTalent)
  async auditionTalentSeen(
    @Arg("jobDateId", { nullable: false })
    jobDateId: number,
    @Arg("jobBriefSupplierElementId", { nullable: false })
    jobBriefSupplierElementId: number,
    @Arg("isSeen", { nullable: false })
    isSeen: boolean,
    @Arg("seenTime", { nullable: false })
    seenTime: string,
    @Ctx() context: Context
  ): Promise<AuditionTalent | null> {
    try {
      const result = await apiUpdateAuditionTalentSeen(context.token, jobDateId, jobBriefSupplierElementId, isSeen, seenTime);
      console.log(result)
      return result;
    } catch (e:any) {
      console.error(e);
      throw new Error(e.message);
    }
    return null;
  }
}


@Resolver(() => AuditionTalent)
export class AuditionTalentReadyResolver {
  @Authorized()
  @Mutation(() => AuditionTalent)
  async auditionTalentReady(
    @Arg("jobDateId", { nullable: false })
    jobDateId: number,
    @Arg("jobBriefSupplierElementId", { nullable: false })
    jobBriefSupplierElementId: number,
    @Arg("isReady", { nullable: false })
    isReady: boolean,
    @Ctx() context: Context
  ): Promise<AuditionTalent | null> {
    try {
      const result = await apiUpdateAuditionTalentReady(context.token, jobDateId, jobBriefSupplierElementId, isReady);
      return result;
    } catch (e:any) {
      console.error(e);
      throw new Error(e.message);
    }
    return null;
  }
}

@Resolver(() => AuditionTalentMedia)
export class AuditionTalentImageArchiveResolver {
  @Authorized()
  @Mutation(() => AuditionTalentMedia)
  async auditionTalentImageArchive(
    @Arg("jobDateId", { nullable: false })
    jobDateId: number,
    @Arg("jobBriefSupplierElementId", { nullable: false })
    jobBriefSupplierElementId: number,
    @Arg("folderElementImageInstanceId", { nullable: false })
    folderElementImageInstanceId: number,
    @Arg("isArchived", { nullable: false })
    isArchived: boolean,
    @Ctx() context: Context
  ): Promise<AuditionTalentMedia | null> {
    try {
      const result = await apiUpdateAuditionTalentImageArchived(context.token, jobDateId, jobBriefSupplierElementId, folderElementImageInstanceId, isArchived);
      console.log(result)
      return result;
    } catch (e:any) {
      console.error(e);
      throw new Error(e.message);
    }
    return null;
  }
}

@Resolver(() => AuditionTalentMedia)
export class AuditionTalentVideoArchiveResolver {
  @Authorized()
  @Mutation(() => AuditionTalentMedia)
  async auditionTalentVideoArchive(
    @Arg("jobDateId", { nullable: false })
    jobDateId: number,
    @Arg("jobBriefSupplierElementId", { nullable: false })
    jobBriefSupplierElementId: number,
    @Arg("folderElementVideoInstanceId", { nullable: false })
    folderElementVideoInstanceId: number,
    @Arg("isArchived", { nullable: false })
    isArchived: boolean,
    @Ctx() context: Context
  ): Promise<AuditionTalentMedia | null> {
    try {
      const result = await apiUpdateAuditionTalentVideoArchived(context.token, jobDateId, jobBriefSupplierElementId, folderElementVideoInstanceId, isArchived);
      console.log(result)
      return result;
    } catch (e:any) {
      console.error(e);
      throw new Error(e.message);
    }
    return null;
  }
}

@Resolver(() => GenericMutationResult)
export class AuditionTalentVideoStitchPendingResolver {
  @Authorized()
  @Mutation(() => GenericMutationResult)
  async auditionTalentVideoStitchPending(
    @Arg("elementId", { nullable: false })
    elementId: number,
    @Arg("elementVideoId", { nullable: false })
    elementVideoId: number,
    @Arg("videos", { nullable: true })
    videos: string,
    @Ctx() context: Context
  ): Promise<GenericMutationResult | null> {
    try {
      const result = await apiUpdateAuditionTalentVideoStitchPending(context.token, elementId, elementVideoId, videos);
      console.log(result)
      return result;
    } catch (e:any) {
      console.error(e);
      throw new Error(e.message);
    }
    return null;
  }
}

@Resolver(() => GenericMutationResult)
export class AuditionTalentVideoTrimPendingResolver {
  @Authorized()
  @Mutation(() => GenericMutationResult)
  async auditionTalentVideoTrimPending(
    @Arg("elementId", { nullable: false })
    elementId: number,
    @Arg("elementVideoId", { nullable: false })
    elementVideoId: number,
    @Arg("url", { nullable: false })
    url: string,
    @Arg("trimStart", { nullable: false })
    trimStart: string,
    @Arg("trimEnd", { nullable: false })
    trimEnd: string,
    @Ctx() context: Context
  ): Promise<GenericMutationResult | null> {
    try {
      const result = await apiUpdateAuditionTalentVideoTrimPending(context.token, elementId, elementVideoId, url, trimStart,  trimEnd);
      console.log(result)
      return result;
    } catch (e:any) {
      console.error(e);
      throw new Error(e.message);
    }
    return null;
  }
}

@Resolver(() => GenericMutationResult)
export class AuditionTalentMediaRanksResolver {
  @Authorized()
  @Mutation(() => GenericMutationResult)
  async auditionTalentMediaRanks(
    @Arg("jobDateId", { nullable: false })
    jobDateId: number,
    @Arg("jobBriefSupplierElementId", { nullable: false })
    jobBriefSupplierElementId: number,
    @Arg("images", { nullable: true })
    images: string,
    @Arg("videos", { nullable: true })
    videos: string,
    @Ctx() context: Context
  ): Promise<GenericMutationResult | null> {
    try {
      const result = await apiUpdateAuditionTalentMediaRanks(context.token, jobDateId, jobBriefSupplierElementId, images, videos);
      console.log(result)
      return result;
    } catch (e:any) {
      console.error(e);
      throw new Error(e.message);
    }
    return null;
  }
}